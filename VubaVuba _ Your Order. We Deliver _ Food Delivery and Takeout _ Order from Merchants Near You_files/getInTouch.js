let activeType = "general"

function onToggleGetInTouch(type) {
    const general = document.getElementById("general-inq")
    const partner = document.getElementById("partner-inq")
    const party = document.getElementById('selectedParty')

    if (type === 1) {
        partner.classList.remove("active")
        partner.classList.add("inactive")
        general.classList.remove("inactive")
        general.classList.add("active")
        activeType = "general"
        party.value = "general"
    } else {
        general.classList.remove("active")
        general.classList.add("inactive")
        partner.classList.remove("inactive")
        partner.classList.add("active")
        activeType = "partner"
        party.value = "partner"
    }
}

function getGetInTouchSelectedParty() {
    return activeType
}