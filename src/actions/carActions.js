export const addFeature = feature => {
    console.log("Adding Feature")
    return {type: "ADD_FEATURE", payload: feature}
}

export const delFeature = feature => {
    console.log("Removing Feature")
    return {type: "REMOVE_FEATURE", payload: feature}
}