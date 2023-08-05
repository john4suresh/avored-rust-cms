#[derive(Debug, Clone)]
pub struct AvoRedConfigProvider {
    pub database_namespace: String,
    pub database_name: String,
    pub session_secret_key: String
}

impl AvoRedConfigProvider {
    pub fn new() -> AvoRedConfigProvider {
        let database_namespace = std::env::var("AVORED_DATABASE_NAME").expect("AVORED_DATABASE_NAMESPACE must be set");
        let database_name = std::env::var("AVORED_DATABASE_NAME").expect("AVORED_DATABASE_NAME must be set");
        let session_secret_key = std::env::var("AVORED_SESSION_SECRET_KEY").expect("AVORED_SESSION_SECRET_KEY must be set");

        AvoRedConfigProvider {
            database_namespace,
            database_name,
            session_secret_key
        }
    }
}