import * as LayoutActions  from 'commonRedux/actions/layout';
import LayoutActionFactory  from 'commonRedux/actions/factories/layoutActionFactory';
import { ILayout } from 'types';
import { LAYOUT_FETCH_NOTIFICATIONS } from '../../../src/redux/actions/layout';

describe('Testing layout actions : src/redux/actions/layout',()=>{
    
    let testUser:ILayout = {
        isBusy: true,
        email: "test@d.com",
        firstName: "xiehai",
        lastName: "Gu",
        company: "d",
        notifications: "3",
        urls: {
            settings: "test",
            notifications: "3",
            logout: "/logout"
        }
    }
    

    it('should create an action for init header',()=>{
        let payload = testUser;
        const initHeader = LayoutActionFactory.initHeader(payload);
        
        let result:LayoutActions.IInitHeader ={
            type: LayoutActions.LAYOUT_INIT_HEADER,
            payload
        };
        expect(result).toEqual(initHeader);
    });

    it('should create an action for error', ()=>{
        let payload = {};
        const error = LayoutActionFactory.error(payload);
        const result ={
            type:LayoutActions.LAYOUT_ERROR,
            payload
        }
        expect(result).toEqual(error);
    });

    it('should create an action for fetch Notification',()=>{
        const fetchNotifications = LayoutActionFactory.fetchNotifications();
        let result:LayoutActions.IFetchNotifications ={
            type: LayoutActions.LAYOUT_FETCH_NOTIFICATIONS
        };
        expect(result).toEqual(fetchNotifications);
    });

    it('should create an action for successfully fetching the user',()=>{
        let payload = testUser;
        const userFetchSucceed = LayoutActionFactory.userFetchSucceed(payload);
        const result:LayoutActions.IFetchUserSuccess = {
            type:LayoutActions.LAYOUT_FETCH_USER_SUCCESS,
            payload
        }
        expect(result).toEqual(userFetchSucceed);
    });

    it('should create an action for successfully fetching the notification number',()=>{
        let payload = {
            notifications:"3"
        }
        const notificationFetchSucceed = LayoutActionFactory.notificationFetchSucceed(payload);
        const result:LayoutActions.IFetchNotificationSuccess = {
             type:LayoutActions.LAYOUT_FETCH_NOTIFICATIONS_SUCCESS,
             payload
        }
        expect(result).toEqual(notificationFetchSucceed);
    });
})