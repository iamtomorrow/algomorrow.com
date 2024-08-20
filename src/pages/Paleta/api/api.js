
export const API = {
    getToken: async ( ) => {
        const token = localStorage.getItem("token");
        console.log("TOKEN: ", token);
        if ( token ) {
            return false;
        } 
        return false;
    },

    setToken: async ( token ) => {
        await localStorage.setItem("token", token);
    },

    checkLogin: async ( ) => {

    },

    authenticateToken: async ( token ) => {

    },

    doLogin: async ( email, password ) => {
        console.log(email, " ", password);
    },

    register: async ( name, email, password ) => {
        console.log(name, " ", email, " ", password);
    }
}
