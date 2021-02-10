const initialState = {
    user : {
        isLoggedIn : false,
        user : null,
        signUpData : {},
        loginData: {},
    },
    post : {
        mainPosts: [],
    }
};

export const loginAction = (data) => {
    return {
        type : 'LOG_IN',
        data,
    }
};

export const logoutAction = () => {
    return {
        type : 'LOG_OUT',
    }
};


// name을 변경할때 'state.name = "jjj"'이렇게 하면 안되는 이유
// 참조관계가 유지되서 히스토리가 안남는다?
// reducer란 이전상태와 액션을 통해서 다음 상태를 만들어 내는 것
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN' : 
        return {
            ...state,
            user : {
                ...state.user,
                isLoggedIn : true,
                user : action.data
            }
        };
        
        case 'LOG_OUT' :
        return {
            ...state,
            user : {
                ...state.user,
                isLoggedIn : false,
                user : null
            }            
        };

        default : 
        return state;
    }
};

export default rootReducer;