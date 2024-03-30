use serde::Deserialize;

#[derive(Deserialize, Debug, Clone, Default)]
pub struct UpdateComponentRequest {
    // #[validate(length(min = 1, message = "The name is a required field."))]
    pub name: String,

    // #[validate(length(min = 1, message = "The identifier is a required field."))]
    pub identifier: String,

    pub fields: Vec<UpdatableField>,
}

#[derive(Deserialize, Debug, Clone, Default)]
pub struct UpdatableField {
    pub id: String,
    pub name: String,
    pub identifier: String,
    pub field_type: String,
}

impl UpdateComponentRequest {
    // pub fn validate_errors(&self, mut session: AvoRedSession) -> Result<ValidationErrors> {
    //     let validation_error_list = match self.validate() {
    //         Ok(_) => ValidationErrors::new(),
    //         Err(errors) => errors,
    //     };
    //
    //     for (field_name, error) in validation_error_list.errors() {
    //         match &error {
    //             ValidationErrorsKind::Field(field_errors) => {
    //                 for field_error in field_errors {
    //                     let message = match &field_error.message {
    //                         Some(message) => message,
    //                         None => continue,
    //                     };
    //
    //                     if !message.is_empty() {
    //                         // let key = field_name.clone();
    //                         let validation_key = format!("validation_error_{}", field_name);
    //                         session
    //                             .insert(&validation_key, message)
    //                             .expect("Could not store the validation errors into session.");
    //                     }
    //                 }
    //             }
    //             ValidationErrorsKind::Struct(_) => continue,
    //             ValidationErrorsKind::List(_) => continue,
    //         }
    //     }
    //
    //     Ok(validation_error_list)
    // }
}
