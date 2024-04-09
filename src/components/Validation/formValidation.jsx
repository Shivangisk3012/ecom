export default function formValidation(event) {
    let { name, value } = event.target 

    switch (name) {
        case "name":
            if (value.length === 0) {
                return "Name is required"
            } else if (value.length < 3 || value.length > 20) {
                return "Name should be between 3 to 20 characters"
            } else {
                return ""
            }
        default:
            return ""
    }
}
