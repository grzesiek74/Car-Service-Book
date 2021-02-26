// przyciski
const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.delete');
const panelBtnAdd = document.querySelector('.addNew');
const panelBtnCancel = document.querySelector('.cancel');
const sendBtn = document.querySelector('.send');
const aboutMyCar = document.querySelector('.about-car');
const closePopup = document.querySelector('.close-popup');
// panel
const panel = document.querySelector('.panel');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const costInput = document.querySelector('#cost');
const courseInput = document.querySelector('#car-course');
const dscrTextArea = document.querySelector('#dscr');
// miejsca do wyświetlania danych
const picture = document.querySelector('.car-img');
const carImage = document.querySelector('#car-image');
const tableSrv = document.querySelector('.srv');
// info o aucie
const brandInput = document.querySelector('#brand');
const yearInput = document.querySelector('#year');
const capacityInput = document.querySelector('#capacity');
const powerInput = document.querySelector('#power');
const engineType = document.querySelector('#engine-type');
const numberPlateInput = document.querySelector('#number-plate');
const popupInfo = document.querySelector('.popupInfo');
const tableCarInfo = document.querySelector('.carInfo');



const showPanel = () => {
    panel.style.display = 'flex';
}

const closePanel = () => {
    panel.style.display = 'none';
    clearInputs();
}

const checkForm = () => {
    if(nameInput.value !== '' && dateInput.value !== '' && costInput.value !== '' && courseInput !== ''){
        createNewService();
    } else {
        alert('Uzupełnij wszystkie pola!');
    }
}

const clearInputs = () => {
    nameInput.value = '';
    dateInput.value = '';
    costInput.value = '';
    courseInput.value = '';
    dscrTextArea.value = '';
}


const carInfo = () => {

    const brand = brandInput.value.toUpperCase();
    const year = yearInput.value;
    const capacity = capacityInput.value;
    const power = powerInput.value;
    const typeEngine = engineType.options[engineType.selectedIndex].text;
    const numberPlate = numberPlateInput.value.toUpperCase();

    const newCar = `
                <tr>
                    <td>${brand}</td>
                    <td>${year}</td>
                    <td>${capacity} cm³</td>
                    <td>${power} KM</td>
                    <td>${typeEngine}</td>
                    <td>${numberPlate}</td>
                </tr>`
    
    
    tableCarInfo.innerHTML += newCar;
    brandInput.value = '';
    yearInput.value = '';
    capacityInput.value = '';
    powerInput.value = '';
    engineType.value = '0';
    numberPlateInput.value = '';


    picture.style.backgroundImage = `url('${carImage.value}')`;
}

const checkCarData = () => {
    if(brandInput.value !== '' &&yearInput.value !== '' && capacityInput.value !== '' && powerInput.value !== '' && engineType.value !== '0' && numberPlateInput.value !== ''){
        carInfo();
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
}

const showCarInfo = () => {
    popupInfo.style.display = 'block';
}

const closeCarInfo = () => {
    popupInfo.style.display = 'none';
}


const createNewService = () => {

    const name = nameInput.value;
    const date = dateInput.value;
    const cost = costInput.value;
    const course = courseInput.value;
    const dscr = dscrTextArea.value;


    const newPosition = `
                <tr>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${cost} zł</td>
                    <td>${course} km</td>
                    <td>${dscr}</td>
                    <td><button class="remove""><i class="fas fa-times"></i></button></td>
                </tr>`

    tableSrv.innerHTML += newPosition;
    
    

    closePanel();
    clearInputs();
}

const checkClick = (e) => {
    if(e.target.closest('button').className === 'remove') {
        deleteService(e);
    }
}

const deleteService = (e) => {
    const removeService = e.target.closest('tr');
    removeService.remove();
}


const deleteAll = () => {

    tableSrv.innerHTML = `
                    <tr>
                        <th>Usługa</th>
                        <th>Data</th>
                        <th>Koszt</th>
                        <th>Przebieg</th>
                        <th>Opis</th>
                        <th>Usuń</th>
                    </tr>`;


    tableCarInfo.innerHTML = `
                    <tr>
                        <th>Marka i model</th>
                        <th>Rok produkcji</th>
                        <th>Pojemność silnika</th>
                        <th>Moc silnika</th>
                        <th>Typ silnika</th>
                        <th>Numer rejestracyjny</th>
                    </tr>`;


    brandInput.value = '';
    yearInput.value = '';
    capacityInput.value = '';
    powerInput.value = '';
    engineType.value = '';
    numberPlateInput.value = '';

}


addBtn.addEventListener('click', showPanel);
panelBtnCancel.addEventListener('click', closePanel);
panelBtnAdd.addEventListener('click', checkForm);
deleteAllBtn.addEventListener('click', deleteAll);
sendBtn.addEventListener('click', checkCarData);
tableSrv.addEventListener('click', checkClick);
aboutMyCar.addEventListener('click', showCarInfo);
closePopup.addEventListener('click', closeCarInfo);