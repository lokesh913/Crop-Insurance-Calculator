// State and District Data
const stateDistricts = {
    "andhra pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
    "arunachal pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
    "assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    "bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    "chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    "delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South West Delhi", "West Delhi"],
    "goa": ["North Goa", "South Goa"],
    "gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    "haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "himachal pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "jammu and kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
    "jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    "karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagara", "Chikkaballapura", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    "kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "ladakh": ["Kargil", "Leh"],
    "lakshadweep": ["Lakshadweep"],
    "madhya pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    "manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    "meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    "mizoram": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"],
    "nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
    "puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
    "punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "SAS Nagar", "Tarn Taran"],
    "rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    "sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "tamil nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    "telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalapally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    "tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    "uttar pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    "uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "west bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
};

// Crop data by region and season
const cropsByRegion = {
    "andhra pradesh": {
        kharif: ["Paddy", "Cotton", "Groundnut", "Sugarcane", "Maize", "Red Gram", "Green Gram", "Black Gram"],
        rabi: ["Paddy", "Pulses", "Groundnut", "Maize", "Tobacco", "Sunflower", "Sesame", "Wheat"],
        summer: ["Paddy", "Pulses", "Vegetables", "Sunflower", "Groundnut"]
    },
    "arunachal pradesh": {
        kharif: ["Rice", "Maize", "Millet", "Vegetables", "Fruits"],
        rabi: ["Rice", "Wheat", "Mustard", "Vegetables", "Fruits"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "assam": {
        kharif: ["Rice", "Jute", "Cotton", "Sugarcane", "Maize", "Pulses"],
        rabi: ["Rice", "Pulses", "Oilseeds", "Vegetables", "Wheat", "Mustard"],
        summer: ["Rice", "Vegetables", "Fruits", "Pulses"]
    },
    "bihar": {
        kharif: ["Rice", "Maize", "Arhar", "Sugarcane", "Jute", "Mung", "Urad"],
        rabi: ["Wheat", "Maize", "Gram", "Lentil", "Mustard", "Potato", "Onion"],
        summer: ["Vegetables", "Moong", "Rice", "Maize"]
    },
    "chhattisgarh": {
        kharif: ["Rice", "Maize", "Arhar", "Cotton", "Soybean", "Groundnut"],
        rabi: ["Wheat", "Gram", "Lentil", "Mustard", "Linseed", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses"]
    },
    "delhi": {
        kharif: ["Rice", "Maize", "Bajra", "Vegetables", "Fruits"],
        rabi: ["Wheat", "Mustard", "Vegetables", "Fruits"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "goa": {
        kharif: ["Rice", "Coconut", "Cashew", "Vegetables", "Fruits"],
        rabi: ["Rice", "Vegetables", "Fruits", "Coconut"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "gujarat": {
        kharif: ["Cotton", "Groundnut", "Bajra", "Maize", "Rice", "Pulses"],
        rabi: ["Wheat", "Gram", "Mustard", "Cumin", "Fennel", "Vegetables"],
        summer: ["Groundnut", "Cotton", "Vegetables", "Pulses"]
    },
    "haryana": {
        kharif: ["Rice", "Cotton", "Bajra", "Maize", "Pulses"],
        rabi: ["Wheat", "Mustard", "Gram", "Barley", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses"]
    },
    "himachal pradesh": {
        kharif: ["Maize", "Rice", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Wheat", "Barley", "Mustard", "Vegetables", "Fruits"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "jammu and kashmir": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Wheat", "Barley", "Mustard", "Vegetables", "Fruits"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "jharkhand": {
        kharif: ["Rice", "Maize", "Arhar", "Urad", "Groundnut"],
        rabi: ["Wheat", "Gram", "Lentil", "Mustard", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses"]
    },
    "karnataka": {
        kharif: ["Rice", "Cotton", "Groundnut", "Sugarcane", "Maize", "Pulses"],
        rabi: ["Wheat", "Gram", "Mustard", "Sunflower", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "kerala": {
        kharif: ["Rice", "Rubber", "Coconut", "Spices", "Vegetables", "Fruits"],
        rabi: ["Rice", "Vegetables", "Fruits", "Spices", "Coconut"],
        summer: ["Vegetables", "Fruits", "Rice", "Spices"]
    },
    "madhya pradesh": {
        kharif: ["Soybean", "Cotton", "Rice", "Maize", "Pulses", "Groundnut"],
        rabi: ["Wheat", "Gram", "Mustard", "Linseed", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "maharashtra": {
        kharif: ["Cotton", "Soybean", "Rice", "Groundnut", "Sugarcane", "Pulses"],
        rabi: ["Wheat", "Gram", "Mustard", "Sunflower", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "manipur": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Rice", "Vegetables", "Fruits", "Pulses"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "meghalaya": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Rice", "Vegetables", "Fruits", "Pulses"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "mizoram": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Rice", "Vegetables", "Fruits", "Pulses"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "nagaland": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Rice", "Vegetables", "Fruits", "Pulses"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "odisha": {
        kharif: ["Rice", "Cotton", "Groundnut", "Maize", "Pulses", "Sugarcane"],
        rabi: ["Rice", "Wheat", "Gram", "Mustard", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "punjab": {
        kharif: ["Rice", "Cotton", "Maize", "Pulses", "Groundnut"],
        rabi: ["Wheat", "Mustard", "Gram", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses"]
    },
    "rajasthan": {
        kharif: ["Bajra", "Cotton", "Groundnut", "Maize", "Pulses"],
        rabi: ["Wheat", "Gram", "Mustard", "Cumin", "Vegetables"],
        summer: ["Groundnut", "Cotton", "Vegetables", "Pulses"]
    },
    "sikkim": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Rice", "Vegetables", "Fruits", "Pulses"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "tamil nadu": {
        kharif: ["Rice", "Cotton", "Groundnut", "Sugarcane", "Maize", "Pulses"],
        rabi: ["Rice", "Wheat", "Gram", "Mustard", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "telangana": {
        kharif: ["Rice", "Cotton", "Groundnut", "Maize", "Pulses", "Sugarcane"],
        rabi: ["Rice", "Wheat", "Gram", "Mustard", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "tripura": {
        kharif: ["Rice", "Jute", "Cotton", "Maize", "Pulses"],
        rabi: ["Rice", "Wheat", "Mustard", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses"]
    },
    "uttar pradesh": {
        kharif: ["Rice", "Sugarcane", "Cotton", "Maize", "Pulses", "Groundnut"],
        rabi: ["Wheat", "Gram", "Mustard", "Potato", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    },
    "uttarakhand": {
        kharif: ["Rice", "Maize", "Vegetables", "Fruits", "Pulses"],
        rabi: ["Wheat", "Barley", "Mustard", "Vegetables", "Fruits"],
        summer: ["Vegetables", "Fruits", "Rice"]
    },
    "west bengal": {
        kharif: ["Rice", "Jute", "Maize", "Pulses", "Groundnut"],
        rabi: ["Rice", "Wheat", "Mustard", "Potato", "Vegetables"],
        summer: ["Rice", "Vegetables", "Pulses", "Groundnut"]
    }
};

// Risk zone rates
const riskZoneRates = {
    low: 0.015,    // 1.5%
    medium: 0.025, // 2.5%
    high: 0.035    // 3.5%
};

// Get DOM elements
const calculatorForm = document.getElementById('calculatorForm');
const stateSelect = document.getElementById('state');
const districtSelect = document.getElementById('district');
const seasonSelect = document.getElementById('season');
const cropTypeSelect = document.getElementById('cropType');
const locationSection = document.getElementById('locationSection');
const cropSection = document.getElementById('cropSection');
const detailsSection = document.getElementById('detailsSection');
const resultSection = document.getElementById('resultSection');
const progressSteps = document.querySelectorAll('.step');

// Initialize state dropdown
function initializeStateDropdown() {
    Object.keys(stateDistricts).sort().forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state.replace(/\b\w/g, l => l.toUpperCase());
        stateSelect.appendChild(option);
    });
}

// Update districts based on state selection
function updateDistricts() {
    const selectedState = stateSelect.value;
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (selectedState && stateDistricts[selectedState]) {
        stateDistricts[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district.toLowerCase();
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Update crops based on state and season
function updateCrops() {
    const selectedState = stateSelect.value;
    const selectedSeason = seasonSelect.value;
    cropTypeSelect.innerHTML = '<option value="">Select Crop</option>';

    if (selectedState && selectedSeason && cropsByRegion[selectedState] && cropsByRegion[selectedState][selectedSeason]) {
        cropsByRegion[selectedState][selectedSeason].forEach(crop => {
            const option = document.createElement('option');
            option.value = crop.toLowerCase();
            option.textContent = crop;
            cropTypeSelect.appendChild(option);
        });
    }
}

// Format currency in Indian Rupees
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Format percentage
function formatPercentage(rate) {
    return (rate * 100).toFixed(1) + '%';
}

// Navigation functions
function showSection(sectionId) {
    [locationSection, cropSection, detailsSection, resultSection].forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    updateProgress(sectionId);
}

function updateProgress(currentSection) {
    const sections = ['locationSection', 'cropSection', 'detailsSection'];
    const currentIndex = sections.indexOf(currentSection);
    
    progressSteps.forEach((step, index) => {
        if (index < currentIndex) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index === currentIndex) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('completed', 'active');
        }
    });
}

// Calculate premium
function calculatePremium(event) {
    event.preventDefault();

    const area = parseFloat(document.getElementById('area').value);
    const sumInsured = parseFloat(document.getElementById('sumInsured').value);
    const riskZone = document.getElementById('riskZone').value;

    // Calculate total sum insured
    const totalSumInsured = area * sumInsured;

    // Get premium rate based on risk zone
    const premiumRate = riskZoneRates[riskZone];

    // Calculate premium amount
    const premiumAmount = totalSumInsured * premiumRate;

    // Calculate shares (farmer: 2%, government: remainder)
    const farmerShare = totalSumInsured * 0.02; // 2% of sum insured
    const governmentShare = premiumAmount - farmerShare;

    // Display results
    document.getElementById('totalSumInsured').textContent = formatCurrency(totalSumInsured);
    document.getElementById('premiumRate').textContent = formatPercentage(premiumRate);
    document.getElementById('premiumAmount').textContent = formatCurrency(premiumAmount);
    document.getElementById('farmerShare').textContent = formatCurrency(farmerShare);
    document.getElementById('governmentShare').textContent = formatCurrency(governmentShare);

    showSection('resultSection');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeStateDropdown();
    showSection('locationSection');
});

stateSelect.addEventListener('change', () => {
    updateDistricts();
    updateCrops();
});

seasonSelect.addEventListener('change', updateCrops);

// Navigation button handlers
document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const currentSection = e.target.closest('.form-section');
        if (currentSection.id === 'locationSection') {
            if (stateSelect.value && districtSelect.value) {
                showSection('cropSection');
            }
        } else if (currentSection.id === 'cropSection') {
            if (seasonSelect.value && cropTypeSelect.value) {
                showSection('detailsSection');
            }
        }
    });
});

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const currentSection = e.target.closest('.form-section');
        if (currentSection.id === 'cropSection') {
            showSection('locationSection');
        } else if (currentSection.id === 'detailsSection') {
            showSection('cropSection');
        }
    });
});

document.querySelector('.recalculate-btn').addEventListener('click', () => {
    calculatorForm.reset();
    showSection('locationSection');
});

calculatorForm.addEventListener('submit', calculatePremium); 