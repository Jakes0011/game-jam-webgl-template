mergeInto(LibraryManager.library, {


    //Request to sign into Near wallet
    WalletLogin: async function (contractId, networkId) {
        const nearConnection = await connect(connectionConfig(UTF8ToString(networkId)));
        const walletConnection = new WalletConnection(nearConnection);
        walletConnection.requestSignIn(UTF8ToString(UTF8ToString(contractId)));
    },

    //Logout of Near wallet
    WalletLogout: async function (networkId) {
        const nearConnection = await connect(connectionConfig(UTF8ToString(networkId)));
        const walletConnection = new WalletConnection(nearConnection);
        walletConnection.signOut();
    },

    //Remove peramaters from URL
    RemoveUrlParams: function () {
        history.replaceState({}, document.title, '/');
    },

    IsLoggedIn: async function (networkId) {
        const nearConnection = await connect(connectionConfig(UTF8ToString(networkId)));
        const walletConnection = new WalletConnection(nearConnection);
        alert(walletConnection.isSignedIn());
        //mfgInstance.SendMessage('BtnIsLoggedIn', 'DisplayLoginStatus', status);
    },

});
