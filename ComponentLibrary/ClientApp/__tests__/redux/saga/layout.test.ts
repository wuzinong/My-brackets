
import * as LayoutReducers  from 'commonRedux/reducers/layout';
import {fetchUser,fetchNotifications} from 'commonRedux/saga/layout';
import LayoutActionFactory  from 'commonRedux/actions/factories/layoutActionFactory';
import initState from 'commonRedux/store/initState';
import { ILayout,StoreState } from 'types';
import {expectSaga,testSaga} from 'redux-saga-test-plan';

describe('Testing layout saga : src/redux/saga/layout',()=>{

    let store:StoreState;
    let tUser:ILayout;
    store = initState;

    let tempNotification={
        notifications:"12"
    }

    let signedInUser = {
        email: "test@dnvgl.com",
        firstName: 'no data',
        lastName: 'H',
        company: 'testCompany',
        notifications: '',
        urls: {
            settings: '/my-profile',
            notifications: '',
            logout: ''
        }
    };

    beforeEach(()=>{
        store = {...initState};
    });

   it('should fetch user information via fetchUser',()=>{
      testSaga(fetchUser)
          .next()
          .next({
              data:signedInUser,
              status:200
          })
          .next({
              data:[
                {name:"test",url:"www.g.cn"},
                {name:"test2",url:"www.bing.cn"}
            ]
          })
          .next()
          .isDone();
   });

   it('should fetch notification count via fetchNotifications',()=>{
        // let result = expectSaga(fetchNotifications)
        //         .withReducer(LayoutReducers.handleLayout)
        //         .put(LayoutActionFactory.notificationFetchSucceed(tempNotification))
        //         .dispatch(LayoutActionFactory.fetchNotifications())
        //         .hasFinalState({
        //             ...store.layout,
        //             ...tempNotification
        //         })
        //         .run();
        // return result;

        testSaga(fetchNotifications)
                .next()
                .next(tempNotification)
                .isDone();
   });

});