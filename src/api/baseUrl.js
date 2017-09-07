export default function getBaseUrl() {
    return getQueryStringParameterByName('userMockApi') ? 'http://localhost:3015/' : '/';
}
