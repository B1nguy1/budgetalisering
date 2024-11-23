export const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getEmailName = (email: string) => {
    return email.split("@")[0];
}