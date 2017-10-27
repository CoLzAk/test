import ApiProvider from './api.provider';

export default class LoginProvider extends ApiProvider {
    constructor() {
        super();
    }

    login(loginData) {
        let bodyParam = loginData;

        let headerParams = {
            'x-keyclic-app': xKeyclicApp,
            'x-keyclic-app-version': xKeyclicAppVersion,
        };

        let credentialParams = null;

        path,
            httpMethod,
            pathParams,
            queryParams,
            headerParams,
            bodyParam,
            credentials,
            returnType
        return this.callApi(
            '/security/login',
            'POST',
            pathParams,
            queryParams,
            headerParams,
            bodyParam,
            authNames,
            credentialParams,
            contentTypes,
            accepts,
            returnType
        );
        // return this.callApi()
    }
}