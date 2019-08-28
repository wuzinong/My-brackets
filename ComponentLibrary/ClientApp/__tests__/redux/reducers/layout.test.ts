import * as LayoutReducers  from 'commonRedux/reducers/layout';
import LayoutActionFactory  from 'commonRedux/actions/factories/layoutActionFactory';
import initState from 'commonRedux/store/initState';
import { ILayout,StoreState } from 'types';
import configureStore from 'redux-mock-store';

describe('Testing layout reducers : src/redux/reducers/layout',()=>{
    
    // test('should create an action for init header',()=>{
    //     let result = LayoutReducers.handleLayout(initState.layout);
        
    // });  
    let testUser:ILayout = {
        isBusy: false,
        email: "test@dnvgl.com",
        firstName: "xiehai",
        lastName: "Gu",
        company: "dnvgl",
        notifications: "3",
        urls: {
            settings: "test",
            notifications: "5",
            logout: "/logout"
        }
    }

    let store:StoreState;
    let tUser:ILayout;
    store = initState;
    const mockStore = configureStore();
    beforeEach(()=>{
        // store = mockStore(initState);
        store = {...initState};
        tUser = {...testUser};
    });

    describe('Fetch user succeed',()=>{

        it('should handle initial state',()=>{
            expect(LayoutReducers.handleLayout(store.layout,{type:''})).toEqual(store.layout);
        });

        it('should handle LAYOUT_FETCH_USER_SUCCESS',()=>{
            expect(LayoutReducers.handleLayout(store.layout,LayoutActionFactory.userFetchSucceed(testUser))).toEqual(testUser);
        });
        
        it('should handle LAYOUT_FETCH_NOTIFICATIONS_SUCCESS',()=>{
            let result = {...store.layout};
            result.notifications = "8";
            expect(LayoutReducers.handleLayout(store.layout,LayoutActionFactory.notificationFetchSucceed({notifications:"8"}))).toEqual(result);
        });

        it('should handle LAYOUT_ERROR',()=>{
            tUser.isBusy = true;
            expect(LayoutReducers.handleLayout(store.layout,LayoutActionFactory.error(tUser))).toEqual(tUser);
        });
    });
    
})