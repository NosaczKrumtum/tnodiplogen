// You may notice that all of the code in this project is quite abysmal. Indeed it is. For a change, i decided to make a very low-effort botched site because i thought it was funny (It is in fact a lot of fun messing around with this casually). Rest assured that it works perfectly fine, it's just quite goofy and suboptimal.
import * as htmlToImage from "https://cdn.jsdelivr.net/npm/html-to-image@1.11.13/+esm"
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
//const page3 = document.getElementById("page3")
const pages = [page1,page2]
const ideologies = ["National Socialism","Fascism","Ultranationalism","Despotism","Paternalism","Conservatism","Liberal Conservatism","Liberalism","Progressivism","Socialism","Communism"]
const national_socialism = ["Antarctic Administration","Burgundian System","Clerical Fascism","Idiosyncratic Nazism","Imperial Cult","Naturalised National Socialism","Palingenetic Nazism","Reformed National Socialism","Revolutionary Nazism","Rosenbergite Tendency","Spartanism","Technocratic Nazism"]
const fascism = ["Antarctic Administration","Aristocratic Fascism","Ba'athism","Clerical Fascism","Corporate Statism","Falangism","Fascist Mysticism","Fascist Populism","Integralism","Neosocialism","Ordosocialism","Reform Bureaucracy","Revolutionary Nationalism","Revolutionary Zionism","Sansepolcrismo","Social Credit","Statist Corporatocracy"]
const ultranationalism = ["Fundamentalist Zionism","Reactionary Nationalism","Stratocracy","Stratocratic Corporatism"]
const despotism = ["Absolute Monarchy","Antarctic Administration","Aristocratic Conservatism","Aristocratic Republicanism","Ba'athism","Chiang Kai-Shek Thought","Civilian Dictatorship","Colonial Government","Corporatocracy","Eurasianism","Institutional Despotism","Interim Government","Islamic Nationalism","Managerial State","Military Junta","Military Socialism","National Catholicism","Papacy","Partisan Movement","Personalistic Dictatorship","Radical Kemalism","Technocratic Corporatism","Theocracy","Vanguard Anarchism","Wang Jingwei Thought","Warlordism"]
const paternalism = ["Anocracy","Antarctic Administration","Corporate Paternalism","Dixiecrat","Herrerism","Kemalism","Left-Wing Corporatism","National Conservatism","Oligarchy","Paleoconservatism","Paternalistic Developmentalism","Peronism","Poujadism","Provisional Government","Right-Wing Populism","Semi-Constitutional Monarchy","Social Credit","Social Nationalism","Solidarism","Transitioning Democracy"]
const conservatism = ["Agrarianism","Christian Conservatism","Free-Market Conservatism","Goken Conservatism","Islamic Conservatism","Liberal Corporatism","Natural Conservatism","Oligarchic Conservatism","Paternalistic Conservatism","Populist Conservatism","Prairie Populism","Progressive Conservatism","Right Kemalism","Silent Conservatism","Modern Conservatism"]
const liberal_conservatism = ["Big Tent","Centrist Progressivism","Christian Democracy","Islamic Modernism","Market Liberalism","Moderate Technocracy","Oligarchic Liberalism"]
const liberalism = ["Christian Liberalism","Classical Liberalism","Dynastic Liberalism","Dynastic Liberalism","Dynastic Liberalism","Dynastic Liberalism","Dynastic Liberalism","Dynastic Liberalism","Liberal Agrarianism","Liberal Radicalism","Liberal Technocracy","National Liberalism","Social Liberalism"]
const progressivism = ["Christian Progressivism","Eastern Progressivism","Gaitanismo","Left Kemalism","Left-Wing Agrarianism","Left-Wing Populism","Liberal Socialism","Neocorporatism","Popular Front","Reformist Socialism","Social Radicalism","Utopian Socialism","Western Progressivism"]
const socialist = ["African Socialism","Agrarian Socialism","Anarcho-Communism","Ba'athism","Buddhist Socialism","Christian Socialism","Islamic Socialism","Left-Wing Nationalism","Pan-Africanism","Revolutionary Front","Revolutionary Gaitanismo","Social Democracy","Socialist Zionism","Syndicalism","Ultravisionary Socialism","Ultravisionary Socialism"]
const communist = ["Amazonism","Bolshevism","Guevarism","Harmonic Communism","Left Communism","Mao Zedong Thought","Marxism-Leninism","National Communism","People's Democracy","Stratocratic Communism","Bolshevik-Leninism","Workerism"]
const subideologyGroups = [national_socialism, fascism, ultranationalism, despotism, paternalism, conservatism, liberal_conservatism, liberalism, progressivism, socialist, communist]
// ja pierdole xd
const national_socialism_picture = ["Antarctic Administration","Burgundian System","Nazi Clerical Fascism","Idiosyncratic Nazism","Imperial Cult","Naturalised National Socialism","Palingenetic Nazism","Reformed National Socialism","Revolutionary Nazism","Rosenbergite Tendency","Spartanism","Technocratic Nazism"]
const fascism_picture = ["Antarctic Administration","Aristocratic Fascism","Ba'athism","Clerical Fascism","Corporate Statism","Falangism","Fascist Mysticism","Fascist Populism","Integralism","Neosocialism","Ordosocialism","Reform Bureaucracy","Revolutionary Nationalism","Revolutionary Zionism","Sansepolcrismo","Social Credit","Statist Corporatocracy"]
const ultranationalism_picture = ["Fundamentalist Zionism","Reactionary Nationalism","Stratocracy","Stratocratic Corporatism"]
const despotism_picture = ["Absolute Monarchy","Antarctic Administration","Aristocratic Conservatism","Aristocratic Republicanism","Ba'athism","Chiang Kai-Shek Thought","Civilian Dictatorship","Colonial Government","Corporatocracy","Eurasianism","Institutional Despotism","Interim Government","Islamic Nationalism","Managerial State","Military Junta","Military Socialism","National Catholicism","Papacy","Partisan Movement","Personalistic Dictatorship","Radical Kemalism","Technocratic Corporatism","Theocracy","Vanguard Anarchism","Wang Jingwei Thought","Warlordism"]
const paternalism_picture = ["Anocracy","Antarctic Administration","Corporate Paternalism","Dixiecrat","Herrerism","Kemalism","Left-Wing Corporatism","National Conservatism","Oligarchy","Paleoconservatism","Paternalistic Developmentalism","Peronism","Poujadism","Provisional Government","Right-Wing Populism","Semi-Constitutional Monarchy","Paternalism Social Credit","Social Nationalism","Solidarism","Transitioning Democracy"]
const conservatism_picture = ["Agrarianism","Christian Conservatism","Free-Market Conservatism","Goken Conservatism","Islamic Conservatism","Liberal Corporatism","Natural Conservatism","Oligarchic Conservatism","Paternalistic Conservatism","Populist Conservatism","Prairie Populism","Progressive Conservatism","Right Kemalism","Silent Conservatism","Modern Conservatism"]
const liberal_conservatism_picture = ["Big Tent","Centrist Progressivism","Christian Democracy","Islamic Modernism","Market Liberalism","Moderate Technocracy","Oligarchic Liberalism"]
const liberalism_picture = ["Christian Liberalism","Classical Liberalism","Dynastic Liberalism Chep","Dynastic Liberalism Gabor","Dynastic Liberalism Hart","Dynastic Liberalism Kennedy","Dynastic Liberalism Kirk","Dynastic Liberalism Lbj","Liberal Agrarianism","Liberal Radicalism","Liberal Technocracy","National Liberalism","Social Liberalism"]
const progressivism_picture = ["Christian Progressivism","Eastern Progressivism","Gaitanismo","Left Kemalism","Left-Wing Agrarianism","Left-Wing Populism","Liberal Socialism","Neocorporatism","Popular Front","Reformist Socialism","Social Radicalism","Utopian Socialism","Western Progressivism"]
const socialist_picture = ["African Socialism","Agrarian Socialism","Anarcho-Communism","Ba'athism","Buddhist Socialism","Christian Socialism","Islamic Socialism","Left-Wing Nationalism","Pan-Africanism","Revolutionary Front","Revolutionary Gaitanismo","Social Democracy","Socialist Zionism","Syndicalism","Ultravisionary Socialism","Ultravisionary Socialism Pink"]
const communist_picture = ["Amazonism","Bolshevism","Guevarism","Harmonic Communism","Left Communism","Mao Zedong Thought","Marxism-Leninism","National Communism","People's Democracy","Stratocratic Communism","Bolshevik-Leninism","Workerism"]
const subideologyGroupspictures = [national_socialism_picture, fascism_picture, ultranationalism_picture, despotism_picture, paternalism_picture, conservatism_picture, liberal_conservatism_picture, liberalism_picture, progressivism_picture, socialist_picture, communist_picture]
//
const factions = ['No faction','Afrika-Schild','Alianza del Plata','Central African League','Central Asian Defense League','Central Asian Solidarity Alliance','Dai Tōa Kyōeiken','Einheitspakt','Fourth International','French Community','French Military Alliance','Front Indonesia Merdeka','Haitian United Front','Hispaniolan Revolutionary Front','Imperial Alliance','Levantine Union','Mano River Pact','Mediterranean Bloc','National Liberation Front','Negara Kesatuan Republik Indonesia','Organization of Free Nations','Pan-African Liberation Front','Revolutionary Iranian Liberation Front','Rome Pact','Siberian Mutual Assistance Compact','Triumvirate','United Arab States','United Filipino Front','União de Defesa Sul-Americana','Ural Alliance','West African Alliance','West African Federation']
const alianza_del_plata = ['Alianza del Plata Member','Hegemon of South America']
const dai_toa_kyoeiken = ['Chinese Warlord','Core Member of the Sphere (China)','Core Member of the Sphere (Manchukuo)','Corporate Dependency','Economically Dependent Member of the Sphere','Fully Dependent Member of the Sphere','Independent Member of the Sphere','Japanese Military Administration','Leader of the Sphere']
const einheitspakt = ['Autonomous Reichskommissariat','Bündnispartner','Integrated Reichskommissariat','Marionettenstaat','Master of Europe','Militärverwaltung','Mitstreiter','Ordensstaat','Protektorat',"Reichsland"]
const french_community = ['French Associated State','French Community Member']
const french_military_alliance = ['French Military Puppet','Signatory of the French Military Alliance']
const front_indonesia_merdeka = ['PRIM Leader','PRIM Loyalist']
const imperial_alliance = ['Leader of the Imperial Alliance','Member of the Imperial Alliance']
const mediterranean_bloc = ['Leader of the Mediterranean Bloc','Member of the Mediterranean Bloc']
const negara_kesatuan_republik_indonesia = ['Central Government Leader','Central Government Loyalist']
const no_faction = ['OFN Partner','Pakt Observer','Sphere Observer','Suspended Member of the OFN','Triumvirate Observer']
const organization_of_free_nations = ['American Military Government','Dependent Member of the OFN','Independent Member of the OFN','Interim Authority','Leader of the Free World','OFN Mandate']
const pan_african_liberation_front = ['Liberated Satellite','Member of the Pan-African Liberation Front']
const rome_pact = ['Leader of the Rome Pact','Member of the Rome Pact']
const triumvirate = ['Triumvirate Client Member','Triumvirate Founder (Iberia)','Triumvirate Founder (Italy)','Triumvirate Founder (Turkey)','Triumvirate Member']
const uniao_de_defesa_sul_americana = ['Hegemon of South America (Cayenne)','Hegemon of South America','Member']
const west_african_alliance = ['Signatory of the West African Alliance','West African Protectorate']
const west_african_federation = ['Member of the West African Federation','West African Supervised State']
const statusGroups = [no_faction,0,alianza_del_plata,0,0,0,dai_toa_kyoeiken,einheitspakt,0,french_community,french_military_alliance,front_indonesia_merdeka,0,0,imperial_alliance,0,0,mediterranean_bloc,0,negara_kesatuan_republik_indonesia,organization_of_free_nations,pan_african_liberation_front,0,rome_pact,0,triumvirate,uniao_de_defesa_sul_americana,0,0,0,west_african_alliance,west_african_federation]
const colors = ["#32211e", "#6e2d23", "#191919", "#414141", "#656565", "#1a1a65", "#2f367f", "#4e5b89", "#9a2b4d", "#852121", "#611717"]
function show(page) {
    document.addEventListener('DOMContentLoaded', () => {
        const partyEl = document.getElementById('party')
        const polipartyEl = document.getElementById('poliparty')
        const leaderEl = document.getElementById('leader')
        const polileaderEl = document.getElementById('polileader')
        const focusEl = document.getElementById('focus')
        const polifocusEl = document.getElementById('polifocus')
        const syncElements = (sourceEl, targetEl) => {
            let defaultText
            if (sourceEl === partyEl || sourceEl === polipartyEl) {
                defaultText = 'Click to edit party name'
            } else if (sourceEl === leaderEl || sourceEl === polileaderEl) {
                defaultText = 'Click to edit leader name'
            } else if (sourceEl === focusEl || sourceEl === polifocusEl) {
                defaultText = 'Click to edit leader name'
            }
            const text = sourceEl.textContent.trim()
            if (text && text !== defaultText) {
            targetEl.textContent = text
            } else if (text === defaultText) {
            if (targetEl.textContent.trim() !== defaultText) {
                targetEl.textContent = defaultText
            }}
        }
        partyEl.addEventListener('input', () => syncElements(partyEl, polipartyEl))
        polipartyEl.addEventListener('input', () => syncElements(polipartyEl, partyEl))
        leaderEl.addEventListener('input', () => syncElements(leaderEl, polileaderEl))
        polileaderEl.addEventListener('input', () => syncElements(polileaderEl, leaderEl))
        focusEl.addEventListener('input', () => syncElements(focusEl, polifocusEl))
        polifocusEl.addEventListener('input', () => syncElements(polifocusEl, focusEl))
    })

    pages.forEach(element => {
        element.style.display = "none"
    })
    page.style.display = "block"
}
show(page1)
document.getElementById("page1Button").addEventListener("click", () => { show(page1) })
document.getElementById("page2Button").addEventListener("click", () => { show(page2) })
//document.getElementById("page3Button").addEventListener("click", () => { show(page3) })
document.getElementById("diploDownload").addEventListener("click", async () => {
    try {
        const element = document.getElementById("diploScreenshot")
        if (!element) throw new Error("Element not found")
        const clone = element.cloneNode(true)
        clone.style.position = 'fixed'
        clone.style.top = '0'
        clone.style.left = '0'
        clone.style.zIndex = '999999'
        clone.style.visibility = 'hidden'
        clone.style.background = 'transparent'
        document.body.appendChild(clone)
        const clonedFlag = clone.querySelector("#flagOverlay")
        if (clonedFlag) {
            clonedFlag.style.animation = 'none'
            clonedFlag.style.backgroundImage = 'url("./flagOverlay.png")'
        }
        await new Promise(resolve => setTimeout(resolve, 50))
        clone.style.visibility = 'visible'
        const options = {
            backgroundColor: null,
            width: element.offsetWidth,
            height: element.offsetHeight,
            cacheBust: true
        }
        const dataURL = await htmlToImage.toPng(clone, options)
        const link = document.createElement("a")
        link.href = dataURL
        link.download = `The New Order ${leader} ${country} diplomatic screen.png`
        document.body.appendChild(link)
        link.click()
        setTimeout(() => document.body.removeChild(link), 100)

    } catch (error) {
        console.error("Screenshot failed:", error)
        alert("Screenshot downloading is not supported on this browser. Chrome-based browsers seem to work just fine, so you might wanna try there. Not my fault the modules suck, i'm a Firefox user myself and this pisses me off.")
    } finally {
        const clones = document.querySelectorAll('#diploScreenshot[style*="fixed"]')
        clones.forEach(clone => document.body.removeChild(clone))
    }
})
document.getElementById("poliDownload").addEventListener("click", async () => {
    try {
        const element = document.getElementById("poliScreenshot")
        if (!element) throw new Error("Element not found")
        const clone = element.cloneNode(true)
        clone.style.position = 'fixed'
        clone.style.top = '0'
        clone.style.left = '0'
        clone.style.zIndex = '999999'
        clone.style.visibility = 'hidden'
        clone.style.background = 'transparent'
        document.body.appendChild(clone)
        await new Promise(resolve => setTimeout(resolve, 50))
        clone.style.visibility = 'visible'
        const options = {
            backgroundColor: null,
            width: element.offsetWidth,
            height: element.offsetHeight,
            cacheBust: true
        }
        const dataURL = await htmlToImage.toPng(clone, options)
        const link = document.createElement("a")
        link.href = dataURL
        link.download = `The New Order ${polileader} political screen.png`
        document.body.appendChild(link)
        link.click()
        setTimeout(() => document.body.removeChild(link), 100)

    } catch (error) {
        console.error("Screenshot failed:", error)
        alert("Screenshot downloading is not supported on this browser. Chrome-based browsers seem to work just fine, so you might wanna try there. Not my fault the modules suck, i'm a Firefox user myself and this pisses me off.")
    } finally {
        const clones = document.querySelectorAll('#poliScreenshot[style*="fixed"]')
        clones.forEach(clone => document.body.removeChild(clone))
    }
})
function setupImageUpload(buttonId, targetId) {
    document.getElementById(buttonId).addEventListener("click", () => {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = "image/*"
        input.onchange = e => {
            if (e.target.files[0]) {
                const reader = new FileReader()
                reader.onload = event => {
                    const target = document.getElementById(targetId)
                    if (target) {
                        target.style.backgroundImage = `url(${event.target.result})`
                        target.style.backgroundSize = "cover"
                    }
                    
                    let secondaryTargetId
                    if (buttonId.includes('poli')) {
                        secondaryTargetId = targetId.replace('poli', '')
                    } else {
                        secondaryTargetId = 'poli' + targetId
                    }
                    
                    const secondaryTarget = document.getElementById(secondaryTargetId)
                    if (secondaryTarget) {
                        secondaryTarget.style.backgroundImage = `url(${event.target.result})`
                        secondaryTarget.style.backgroundSize = "cover"
                    }
                }
                reader.readAsDataURL(e.target.files[0])
            }
        }
        input.click()
    })
}
setupImageUpload("flagUpload", "flag")
setupImageUpload("portraitUpload", "portrait")
setupImageUpload("focusUpload", "focusIcon")
setupImageUpload("factionStatusUpload", "factionStatus")
//
setupImageUpload("poliportraitUpload", "poliportrait")
setupImageUpload("polifocusUpload", "polifocusIcon")
setupImageUpload("polifactionUpload", "polifactionIcon")
setupImageUpload("polistatusUpload", "polifactionStatus")
setupImageUpload("polihogUpload", "polihog")
setupImageUpload("poliforUpload", "polifor")
setupImageUpload("poliecoUpload", "polieco")
setupImageUpload("polisecUpload", "polisec")
//
function setupImageEdit(buttonId, targetId) {
    const options = [
        ['cover', 'center center'],
        ['cover', 'bottom center'],
        ['cover', 'top center'],
        ['cover', 'left center'],
        ['cover', 'right center'],
        ['contain', 'center center'],
        ['contain', 'bottom center'],
        ['contain', 'top center'],
        ['contain', 'left center'],
        ['contain', 'right center']
    ]
    let currentIndex = 0
    document.getElementById(buttonId).addEventListener("click", () => {
        const target = document.getElementById(targetId)
        currentIndex = (currentIndex + 1) % options.length
        target.style.backgroundSize = options[currentIndex][0]
        target.style.backgroundPosition = options[currentIndex][1]
    })
}
setupImageEdit("flagEdit", "flag")
setupImageEdit("portraitEdit", "portrait")
setupImageEdit("focusEdit", "focusIcon")
setupImageEdit("factionStatusEdit", "factionStatus")
//
setupImageEdit("poliportraitEdit", "poliportrait")
setupImageEdit("polifocusEdit", "polifocusIcon")
setupImageEdit("polifactionEdit", "polifactionIcon")
setupImageEdit("polistatusEdit", "polifactionStatus")
setupImageEdit("polihogEdit", "polihog")
setupImageEdit("poliforEdit", "polifor")
setupImageEdit("poliecoEdit", "polieco")
setupImageEdit("polisecEdit", "polisec")
//
function setupImageReset(buttonId, targetId) { document.getElementById(buttonId).addEventListener("click", () => { document.getElementById(targetId).style.backgroundImage = "none" }) }
setupImageReset("flagReset", "flag")
setupImageReset("portraitReset", "portrait")
setupImageReset("focusReset", "focusIcon")
setupImageReset("factionStatusReset", "factionStatus")
//
setupImageReset("poliportraitReset", "poliportrait")
setupImageReset("polifocusReset", "polifocusIcon")
setupImageReset("polifactionReset", "polifactionIcon")
setupImageReset("polistatusReset", "polifactionStatus")
setupImageReset("polihogReset", "polihog")
setupImageReset("poliforReset", "polifor")
setupImageReset("poliecoReset", "polieco")
setupImageReset("polisecReset", "polisec")
//
const editableDivs = ["country", "diplonamefaction", "leader", "stability", "warSupport", "party", "election", "focus","poliparty",'polileader','polifocus']
editableDivs.forEach(divId => {
    window[divId] = document.getElementById(divId).textContent
})
editableDivs.forEach(divId => {
    const div = document.getElementById(divId)
    div.addEventListener("click", function () {
        this.setAttribute("contenteditable", "plaintext-only")
        this.focus()
        const range = document.createRange()
        range.selectNodeContents(this)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
    })
    div.addEventListener("blur", function () {
        this.removeAttribute("contenteditable")
        window[divId] = this.textContent
    })
    div.addEventListener("input", function () {
        window[divId] = this.textContent
    })
})
let selectedIdeology = -1
let selectedSubideology = -1
let ideologyButtons = []
let poliideologyButtons = []
let subideologyButtons = []
let polisubideologyButtons = []
//
let selectedFaction = -1
let selectedStatus = -1
let factionButtons = []
let polifactionButtons = []
let statusButtons = []
let polistatusButtons = []
for (let i = 0; i < ideologies.length; i++) {
    const ideologyElement = document.createElement("ideology")
    const poliideologyElement = document.createElement("poliideology")
    ideologyElement.innerHTML = `<img src="./icon/${ideologies[i]}.png"><div>${ideologies[i]}</div>`
    ideologyElement.dataset.index = i
    ideologyElement.addEventListener("click", function () { toggleIdeology(this) })
    poliideologyElement.innerHTML = `<img src="./icon/${ideologies[i]}.png"><div>${ideologies[i]}</div>`
    poliideologyElement.dataset.index = i
    poliideologyElement.addEventListener("click", function () { toggleIdeology(this) })
    document.getElementById("ideologyPicker").appendChild(ideologyElement)
    document.getElementById("poliideologyPicker").appendChild(poliideologyElement)
    ideologyButtons.push(ideologyElement)
    poliideologyButtons.push(poliideologyElement)
}
let descriptions = {}
function toggleIdeology(ideologyButton) {
    selectedIdeology = parseInt(ideologyButton.dataset.index)
    selectedSubideology = -1
    subideologyDescription.innerHTML = "Description of the selected subideology"
    for (let i = 0; i < ideologyButtons.length; i++) {
        const button = ideologyButtons[i]
        if (i === selectedIdeology) {
            button.style.border = "3px solid #505050"
            button.style.outline = `3px solid ${colors[i]}`
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    for (let i = 0; i < poliideologyButtons.length; i++) {
        const button = poliideologyButtons[i]
        if (i === selectedIdeology) {
            button.style.border = "3px solid #505050"
            button.style.outline = `3px solid ${colors[i]}`
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    const ideologyName = ideologies[selectedIdeology]
    document.getElementById("icon").style.backgroundImage = `url("./icon/${ideologyName}.png")`
    document.getElementById("subideology").innerText = ideologyName
    document.getElementById("ideologyDescription").innerHTML = descriptions[ideologyName] || ""
    document.getElementById("poliicon").style.backgroundImage = `url("./icon/${ideologyName}.png")`
    document.getElementById("polisubideology").innerText = ideologyName
    document.getElementById("poliideologyDescription").innerHTML = descriptions[ideologyName] || ""
    updateSubideologies()
}
function updateSubideologies() {
    const container = document.getElementById("subideologyPicker")
    const title = container.querySelector(".title")
    container.innerHTML = ""
    container.appendChild(title)
    subideologyButtons = []
    const policontainer = document.getElementById("polisubideologyPicker")
    const polititle = policontainer.querySelector(".title")
    policontainer.innerHTML = ""
    policontainer.appendChild(polititle)
    polisubideologyButtons = []
    for (let j = 0; j < subideologyGroups[selectedIdeology].length; j++) {
        const subideologyElement = document.createElement("ideology")
        subideologyElement.innerHTML = `<img src="./icon/${ideologies[selectedIdeology]}/${subideologyGroupspictures[selectedIdeology][j]}.png"><div>${subideologyGroups[selectedIdeology][j]}</div>`
        subideologyElement.dataset.index = j
        subideologyElement.addEventListener("click", function () { toggleSubideology(this) })
        container.appendChild(subideologyElement)
        subideologyButtons.push(subideologyElement)
        const polisubideologyElement = document.createElement("ideology")
        polisubideologyElement.innerHTML = `<img src="./icon/${ideologies[selectedIdeology]}/${subideologyGroupspictures[selectedIdeology][j]}.png"><div>${subideologyGroups[selectedIdeology][j]}</div>`
        polisubideologyElement.dataset.index = j
        polisubideologyElement.addEventListener("click", function () { toggleSubideology(this) })
        policontainer.appendChild(polisubideologyElement)
        polisubideologyButtons.push(polisubideologyElement)
    }
}

function toggleSubideology(subideologyButton) {
    selectedSubideology = parseInt(subideologyButton.dataset.index)
    for (let i = 0; i < subideologyButtons.length; i++) {
        const button = subideologyButtons[i]
        if (i === selectedSubideology) {
            button.style.border = "3px solid #505050"
            button.style.outline = `3px solid ${colors[selectedIdeology]}`
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    for (let i = 0; i < polisubideologyButtons.length; i++) {
        const button = polisubideologyButtons[i]
        if (i === selectedSubideology) {
            button.style.border = "3px solid #505050"
            button.style.outline = `3px solid ${colors[selectedIdeology]}`
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    const subideologyName = subideologyGroups[selectedIdeology][selectedSubideology]
    document.getElementById("icon").style.backgroundImage = `url("./icon/${ideologies[selectedIdeology]}/${subideologyGroupspictures[selectedIdeology][selectedSubideology]}.png")`
    document.getElementById("subideology").innerText = subideologyName
    document.getElementById("subideologyDescription").innerHTML = descriptions[subideologyGroupspictures[selectedIdeology][selectedSubideology]] || ""
    document.getElementById("poliicon").style.backgroundImage = `url("./icon/${ideologies[selectedIdeology]}/${subideologyGroupspictures[selectedIdeology][selectedSubideology]}.png")`
    document.getElementById("polisubideology").innerText = subideologyName
    document.getElementById("polisubideologyDescription").innerHTML = descriptions[subideologyGroupspictures[selectedIdeology][selectedSubideology]] || ""
}
for (let i = 0; i < factions.length; i++) {
    const factionElement = document.createElement("faction")
    const polifactionElement = document.createElement("polifaction")
    factionElement.innerHTML = `<img src="./factions/${factions[i]}.png"><div>${factions[i]}</div>`
    factionElement.dataset.index = i
    factionElement.addEventListener("click", function () { toggleFaction(this) })
    polifactionElement.innerHTML = `<img src="./factions/${factions[i]}.png"><div>${factions[i]}</div>`
    polifactionElement.dataset.index = i
    polifactionElement.addEventListener("click", function () { toggleFaction(this) })
    document.getElementById("factionPicker").appendChild(factionElement)
    document.getElementById("polifactionPicker").appendChild(polifactionElement)
    factionButtons.push(factionElement)
    polifactionButtons.push(polifactionElement)
}

function toggleFaction(factionButton) {
    selectedFaction = parseInt(factionButton.dataset.index)
    selectedStatus = -1
    statusDescription.innerHTML = "Description of the selected status"
    for (let i = 0; i < factionButtons.length; i++) {
        const button = factionButtons[i]
        if (i === selectedFaction) {
            button.style.border = "3px solid #505050"
            button.style.border = "3px solid #505050"
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    for (let i = 0; i < polifactionButtons.length; i++) {
        const button = polifactionButtons[i]
        if (i === selectedFaction) {
            button.style.border = "3px solid #505050"
            button.style.border = "3px solid #505050"
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    const factionName = factions[selectedFaction]
    document.getElementById('diplonamefaction').textContent = factionName
    document.getElementById("factionStatus").style.backgroundImage = `url("./factions/${factionName}.png")`
    if (statusGroups[selectedFaction]=== no_faction ) {
        document.getElementById("polifactionStatus").style.backgroundImage = `url("./factions/${factionName}.png")`
    }
    else if (statusGroups[selectedFaction] !==0 ) {
        document.getElementById("polifactionStatus").style.backgroundImage = `url("./factions/${factionName}/${statusGroups[selectedFaction][0]}.png")`
    } else {
        document.getElementById("polifactionStatus").style.backgroundImage = `url("./factions/${factionName}.png")`

    }
    document.getElementById("polifactionIcon").style.backgroundImage = `url("./factions/${factionName}.png")`
    updateStatuses()
}
function updateStatuses() {
    const container = document.getElementById("statusPicker")
    const title = container.querySelector(".title")
    container.innerHTML = ""
    container.appendChild(title)
    statusButtons = []
    const policontainer = document.getElementById("polistatusPicker")
    const polititle = policontainer.querySelector(".title")
    policontainer.innerHTML = ""
    policontainer.appendChild(polititle)
    polistatusButtons = []
    for (let j = 0; j < statusGroups[selectedFaction].length; j++) {
        const statusElement = document.createElement("faction")
        statusElement.innerHTML = `<img src="./factions/${factions[selectedFaction]}/${statusGroups[selectedFaction][j]}.png"><div>${statusGroups[selectedFaction][j]}</div>`
        statusElement.dataset.index = j
        statusElement.addEventListener("click", function () { toggleStatus(this) })
        container.appendChild(statusElement)
        statusButtons.push(statusElement)
        const polistatusElement = document.createElement("faction")
        polistatusElement.innerHTML = `<img src="./factions/${factions[selectedFaction]}/${statusGroups[selectedFaction][j]}.png"><div>${statusGroups[selectedFaction][j]}</div>`
        polistatusElement.dataset.index = j
        polistatusElement.addEventListener("click", function () { toggleStatus(this) })
        policontainer.appendChild(polistatusElement)
        polistatusButtons.push(polistatusElement)
    }
}

function toggleStatus(statusButton) {
    selectedStatus = parseInt(statusButton.dataset.index)
    for (let i = 0; i < statusButtons.length; i++) {
        const button = statusButtons[i]
        if (i === selectedStatus) {
            button.style.border = "3px solid #505050"
            button.style.border = "3px solid #505050"
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    for (let i = 0; i < polistatusButtons.length; i++) {
        const button = polistatusButtons[i]
        if (i === selectedStatus) {
            button.style.border = "3px solid #505050"
            button.style.border = "3px solid #505050"
        }
        else {
            button.style.border = "3px solid #303030"
            button.style.outline = "3px solid #404040"
        }
    }
    document.getElementById("factionStatus").style.backgroundImage = `url("./factions/${factions[selectedFaction]}/${statusGroups[selectedFaction][selectedStatus]}.png")`
    document.getElementById("polifactionStatus").style.backgroundImage = `url("./factions/${factions[selectedFaction]}/${statusGroups[selectedFaction][selectedStatus]}.png")`
}

fetch('./descriptions.json')
    .then(response => response.json())
    .then(data => descriptions = data)
    .catch(err => console.error('Error loading descriptions:', err))
let percentages = [5, 5, 0, 0, 0, 0, 10, 10, 15, 40, 15]
let lockedPercentages = new Array(colors.length).fill(false)
function createInputs() {
    const toolsDiv = document.getElementById("popularityTools")
    toolsDiv.innerHTML = ""
    const inputsDiv = document.getElementById("popularityInputs")
    inputsDiv.innerHTML = ""
    const politoolsDiv = document.getElementById("polipopularityTools")
    politoolsDiv.innerHTML = ""
    const poliinputsDiv = document.getElementById("polipopularityInputs")
    poliinputsDiv.innerHTML = ""

    const createButton = (id, text, clickHandler) => {
        const btn = document.createElement("button")
        btn.id = id
        btn.textContent = text
        btn.addEventListener("click", clickHandler)
        return btn
    }

    const equalizeBtn1 = createButton("equalizationButton", "Equalize", equalizePercentages)
    const equalizeBtn2 = createButton("equalizationButton2", "Equalize", equalizePercentages)
    toolsDiv.appendChild(equalizeBtn1)
    politoolsDiv.appendChild(equalizeBtn2)

    const randomBtn1 = createButton("randomizationButton", "Randomize", randomizePercentages)
    const randomBtn2 = createButton("randomizationButton2", "Randomize", randomizePercentages)
    toolsDiv.appendChild(randomBtn1)
    politoolsDiv.appendChild(randomBtn2)

    const ideologizeBtn1 = createButton("ideologizationButton", "Ideologize", ideologizePercentages)
    const ideologizeBtn2 = createButton("ideologizationButton2", "Ideologize", ideologizePercentages)
    toolsDiv.appendChild(ideologizeBtn1)
    politoolsDiv.appendChild(ideologizeBtn2)

    const updateControlStates = () => {
        const unlockedCount = lockedPercentages.filter(locked => !locked).length
        for (let i = 0; i < colors.length; i++) {
            const inputs = document.querySelectorAll(`input[data-index="${i}"]`)
            const lockBtns = document.querySelectorAll(`div[data-index="${i}"]:nth-child(2)`)
            const clearBtns = document.querySelectorAll(`div[data-index="${i}"]:last-child`)

            inputs.forEach(input => {
                input.disabled = lockedPercentages[i]
                input.readOnly = !lockedPercentages[i] && unlockedCount <= 1
            })

            const bgColor = lockedPercentages[i] ? "#404040" : "#f0f0f0"
            
            lockBtns.forEach(btn => {
                btn.style.background = `${bgColor} url(./lock.svg) no-repeat center`
                btn.style.backgroundSize = "60%"
            })

            clearBtns.forEach(btn => {
                btn.style.background = `${bgColor} url(./clear.svg) no-repeat center`
                btn.style.backgroundSize = "60%"
            })
        }
    }

    const canDistribute = (excludeIndex) => {
        return lockedPercentages.some((locked, i) => !locked && i !== excludeIndex)
    }

    const createInputGroup = (container, i) => {
        const wrapper = document.createElement("div")
        wrapper.className = "percentageControl"

        const input = document.createElement("input")
        input.type = "number"
        input.min = "0"
        input.max = "100"
        input.value = percentages[i]
        input.dataset.index = i
        input.style.outline = `3px solid ${colors[i]}`
        input.addEventListener("input", function() {
            if (this.readOnly || lockedPercentages[i]) {
                this.value = percentages[i]
                return
            }
            handlePercentageChange(this)
        })

        const lockBox = document.createElement("div")
        lockBox.style.outline = `3px solid ${colors[i]}`
        lockBox.dataset.index = i
        lockBox.addEventListener("click", function() {
            const idx = parseInt(this.dataset.index)
            lockedPercentages[idx] = !lockedPercentages[idx]
            updateControlStates()
        })

        const clearBox = document.createElement("div")
        clearBox.style.outline = `3px solid ${colors[i]}`
        clearBox.dataset.index = i
        clearBox.addEventListener("click", function() {
            const idx = parseInt(this.dataset.index)
            if (!canDistribute(idx)) return
            const oldValue = percentages[idx]
            percentages[idx] = 0
            let remaining = oldValue
            const unlockedIndices = percentages.map((_, i) => i).filter(i => !lockedPercentages[i] && i !== idx)
            while (remaining > 0 && unlockedIndices.length > 0) {
                const minValue = Math.min(...unlockedIndices.map(i => percentages[i]))
                const minIndices = unlockedIndices.filter(i => percentages[i] === minValue)
                minIndices.forEach(i => {
                    if (remaining > 0) {
                        percentages[i]++
                        remaining--
                    }
                })
            }
            updateInputs()
            updateChart()
            updateControlStates()
        })

        wrapper.appendChild(input)
        wrapper.appendChild(lockBox)
        wrapper.appendChild(clearBox)
        container.appendChild(wrapper)
    }

    for (let i = 0; i < colors.length; i++) {
        createInputGroup(inputsDiv, i)
        createInputGroup(poliinputsDiv, i)
    }

    updateControlStates()
}
function ideologizePercentages() {
    if (selectedIdeology < 0 || lockedPercentages.some(locked => locked)) return
    const pattern = [2, 3, 5, 10, 15, 30, 15, 10, 5, 3, 2]
    let remaining = 100
    for (let i = 0; i < ideologies.length; i++) {
        if (lockedPercentages[i]) remaining -= percentages[i]
        else percentages[i] = 0
    }
    const priorityList = []
    for (let distance = 0; distance < ideologies.length; distance++) {
        if (selectedIdeology - distance >= 0 && !lockedPercentages[selectedIdeology - distance]) {
            priorityList.push(selectedIdeology - distance)
        }
        if (distance > 0 && selectedIdeology + distance < ideologies.length && !lockedPercentages[selectedIdeology + distance]) {
            priorityList.push(selectedIdeology + distance)
        }
    }
    const sortedPattern = [...pattern].sort((a, b) => b - a)
    for (let i = 0; i < Math.min(sortedPattern.length, priorityList.length); i++) percentages[priorityList[i]] = sortedPattern[i]
    const currentTotal = percentages.reduce((a, b) => a + b, 0)
    const scaleFactor = remaining / currentTotal
    for (let i = 0; i < ideologies.length; i++) {
        if (!lockedPercentages[i]) percentages[i] = Math.round(percentages[i] * scaleFactor)
    }
    const total = percentages.reduce((a, b) => a + b, 0)
    if (total !== 100) percentages[selectedIdeology] += 100 - total
    updateInputs()
    updateChart()
}
function equalizePercentages() {
    const lockedTotal = percentages.reduce((sum, val, idx) => sum + (lockedPercentages[idx] ? val : 0), 0)
    const availableTotal = 100 - lockedTotal
    const unlockedIndices = percentages.map((_, i) => i).filter(i => !lockedPercentages[i])
    if (unlockedIndices.length === 0) return
    const baseShare = Math.floor(availableTotal / unlockedIndices.length)
    const remainder = availableTotal % unlockedIndices.length
    unlockedIndices.forEach((idx, i) => {
        percentages[idx] = baseShare + (i < remainder ? 1 : 0)
    })
    updateInputs()
    updateChart()
}
function handlePercentageChange(input) {
    const index = parseInt(input.dataset.index)
    if (lockedPercentages[index]) {
        input.value = percentages[index]
        return
    }
    const oldValue = percentages[index]
    let newValue = parseInt(input.value) || 0
    newValue = Math.max(0, Math.min(100, newValue))
    const lockedTotal = percentages.reduce((sum, val, i) => sum + (lockedPercentages[i] ? val : 0), 0)
    const maxAllowed = 100 - lockedTotal
    if (newValue > maxAllowed) {
        newValue = maxAllowed
        input.value = newValue
    }
    percentages[index] = newValue
    const difference = newValue - oldValue
    if (difference !== 0) {
        let unlockedIndices = percentages.map((_, i) => i)
            .filter(i => !lockedPercentages[i] && i !== index)
            .sort((a, b) => percentages[a] - percentages[b])
        if (difference > 0) {
            let remaining = difference
            unlockedIndices.reverse().forEach(idx => {
                if (remaining <= 0) return
                const deduction = Math.min(percentages[idx], remaining)
                percentages[idx] = Math.max(0, percentages[idx] - deduction)
                remaining -= deduction
            })
            if (remaining > 0) percentages[index] = Math.max(0, newValue - remaining)
        } else {
            let remaining = -difference
            unlockedIndices.forEach(idx => {
                if (remaining <= 0) return
                const addition = Math.min(100 - percentages[idx], remaining)
                percentages[idx] = Math.max(0, Math.min(100, percentages[idx] + addition))
                remaining -= addition
            })
        }
    }
    const currentTotal = percentages.reduce((a, b) => a + b, 0)
    if (currentTotal !== 100) {
        const adjustment = 100 - currentTotal
        const targetIdx = percentages.findIndex((val, i) => !lockedPercentages[i] && i !== index)
        if (targetIdx !== -1) {
            percentages[targetIdx] = Math.max(0, Math.min(100, percentages[targetIdx] + adjustment))
        }
    }
    updateInputs()
    updateChart()
}
function randomizePercentages() {
    const lockedTotal = percentages.reduce((sum, val, idx) => sum + (lockedPercentages[idx] ? val : 0), 0)
    const availableTotal = 100 - lockedTotal
    const unlockedIndices = percentages.map((_, i) => i).filter(i => !lockedPercentages[i])
    if (unlockedIndices.length === 0) return
    const weights = unlockedIndices.map(() => Math.random() + 0.1)
    const totalWeight = weights.reduce((a, b) => a + b, 0)
    let remaining = availableTotal
    unlockedIndices.forEach((idx, i) => {
        const basePct = Math.floor((weights[i] / totalWeight) * availableTotal)
        percentages[idx] = Math.max(1, basePct)
        remaining -= percentages[idx]
    })
    while (remaining > 0) {
        unlockedIndices.forEach(idx => {
            if (remaining <= 0) return
            percentages[idx]++
            remaining--
        })
    }
    updateInputs()
    updateChart()
}
function updateInputs() {
    const inputs = document.querySelectorAll("#popularityInputs input")
    const poliinputs = document.querySelectorAll("#polipopularityInputs input")
    inputs.forEach((input, i) => { if (input !== document.activeElement) { input.value = percentages[i] } })
    poliinputs.forEach((input, i) => { if (input !== document.activeElement) { input.value = percentages[i] } })
}
function updateChart() {
    let cumulative = 0
    let gradientStops = []
    for (let i = 0; i < colors.length; i++) {
        if (percentages[i] > 0) {
            const start = cumulative
            cumulative += percentages[i]
            const end = cumulative
            gradientStops.push(`${colors[i]} ${start}% ${end}%`)
        }
    }
    document.getElementById("pieChart").style.background = `conic-gradient(${gradientStops.join(", ")})`
    document.getElementById("polipieChart").style.background = `conic-gradient(${gradientStops.join(", ")})`
    setTimeout(updateInputs, 0)
}
document.getElementById('randomizeIdeology').addEventListener('click', randomizeSubideology)
document.getElementById('randomizeStability').addEventListener('click', () => {
    document.getElementById('stability').innerText = `${Math.floor(Math.random() * 101)}%`
})
document.getElementById('randomizeWarSupport').addEventListener('click', () => {
    document.getElementById('warSupport').innerText = `${Math.floor(Math.random() * 101)}%`
})
function randomizeSubideology() {
    const allSubideologies = []
    subideologyGroups.forEach((group, ideologyIndex) => {
        group.forEach((subideology, subideologyIndex) => {
            allSubideologies.push({ ideologyIndex, subideologyIndex })
        })
    })
    if (allSubideologies.length > 0) {
        const randomPick = allSubideologies[Math.floor(Math.random() * allSubideologies.length)]
        const ideologyButton = ideologyButtons[randomPick.ideologyIndex]
        toggleIdeology(ideologyButton)
        setTimeout(() => {
            const subideologyButton = document.querySelector(`#subideologyPicker ideology[data-index="${randomPick.subideologyIndex}"]`)
            if (subideologyButton) toggleSubideology(subideologyButton)
        }, 0)
    }
}
createInputs()
updateChart()