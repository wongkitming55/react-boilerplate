/**
 * Gets the repositories of the user from Github
 */

import {
  put,
  call,
  cancel,
  takeLatest,
  select,
  take,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import axios from 'axios';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { REQUEST_SERVICE } from './constants';
import { apiCall } from '../../api';
import { CHANGE_LOCALE } from '../LanguageProvider/constants';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* callService(action) {
  let { service } = action;
  if (service.indexOf(' ') > 0) {
    service = service.split(' ');
    service = service[0].concat(service[1]);
  }
  let serviceNo;
  switch (service) {
    case 'MedicalHelp': {
      serviceNo = 1;
      break;
    }
    case 'HouseWine': {
      serviceNo = 2;
      break;
    }
    case 'HotWater': {
      serviceNo = 3;
      break;
    }
    default:
      break;
  }
  if (serviceNo === 1) {
    yield call(
      apiCall(
        `https://m8blugyzih.execute-api.us-east-1.amazonaws.com/HackStage/ResponseQuestion`,
      ),
    );
  } else if (serviceNo === 2) {
    yield call(
      apiCall(
        `https://m8blugyzih.execute-api.us-east-1.amazonaws.com/HackStage/ask2`,
      ),
    );
  } else {
    yield call(
      apiCall(
        `https://m8blugyzih.execute-api.us-east-1.amazonaws.com/HackStage/ask4`,
      ),
    );
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeWatcher() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(REQUEST_SERVICE, callService);
}
