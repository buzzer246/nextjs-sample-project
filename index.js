// import Image from 'next/image'
import Modal from 'react-modal';
import { useState } from 'react';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/system'
import Login from './Login';
import Signup from './Signup';
import Aboutus from './About';
import { Credentials } from './Credentials'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import $ from "jquery";
import Html from './Html'
import Footer from './Footer';
import View from './View';
import { hydrateRoot } from 'react-dom/client';
import { autocomplete } from '../node_modules/jquery/dist/jquery'
import Cart from './Cart';
/* import '@/styles/globals.css'; */
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pname, pickUsername] = useState("");
  const [ppassword, pickPassword] = useState("");
  const [pemail, pickEmail] = useState("");
  const [pphone, pickPhonenumber] = useState("");
  const [paddress, pickAddress] = useState("");
  const [message, updateMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRegi, setModalTrue] = useState(false);
  let[errorlist, updateError] = useState({});

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#89BBDB",
      width: 400,
    },
  };

  const logindata = () => {

    var url = "http://localhost:8080/login_db";
    fetch(url)
      .then(response => response.json())
      .then(serverinfo => {


        if (serverinfo.username == pname) {

          console.log("You have Successfully Loggined as ..:" + serverinfo.username);
          updateMessage("You have Successfully Loggined as ..:" + serverinfo.username)
          window.location.replace("Html");
        }
        else {

          console.log("Account not Exist in database,please Register");
        }


        pickUsername("");
        pickPassword("");
      })

  }

  const openregister = () => {

    var userinfo = {

      "username": pname,
      "email": pemail,
      "password": ppassword,
      "address": paddress,
      "phonenumber": pphone
    };

    const postData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userinfo)
    };


    fetch("http://localhost:8080/login_db/", postData)
      .then(response => response.json())
      .then(serverinfo => {
        console.log(serverinfo);

        if (pname == "") {

          updateMessage("Account not Exist in database,please Register!");
        }
        else {

          updateMessage("You have SuccessFully Registered !");

        }

        pickUsername("");
        pickPassword("");
        pickAddress("");
        pickEmail("");
        pickPhonenumber("");
      })

  }


  {/* <div className='container-fluid'>
    
                  <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
                   data-bs-keyboard="false" data-bs-backdrop="static">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title justify-content-center text-success" id="login">Register</h5>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3">
                           <label>Email ID/Username</label>
                            <input type="text" id="email" class="form-control" placeholder="Enter the Email/Username" />
                          </div>
                          <div class="mb-3">
                          <label>Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter the Password" />
                          </div>
                          <div class="mb-3">
                          <label>PhoneNumber</label>
                            <input type="number" id="phone" class="form-control" placeholder="Enter Phonenumber" />
                          </div>
                          </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                          
                          <button type="button" class="btn btn-primary">SaveChanges</button>
                          
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>    */}


  function search() {

    var myloc = ['Adilabad',
      'Anantapur',
      'Chittoor',
      'Kakinada',
      'Guntur',
      'Hyderabad',
      'Karimnagar',
      'Khammam',
      'Krishna',
      'Kurnool',
      'Mahbubnagar',
      'Medak',
      'Nalgonda',
      'Nizamabad',
      'Ongole',
      'Hyderabad',
      'Srikakulam',
      'Nellore',
      'Visakhapatnam',
      'Vizianagaram',
      'Warangal',
      'Eluru',
      'Kadapa', 'Anjaw',
      'Changlang',
      'East Siang',
      'Kurung Kumey',
      'Lohit',
      'Lower Dibang Valley',
      'Lower Subansiri',
      'Papum Pare',
      'Tawang',
      'Tirap',
      'Dibang Valley',
      'Upper Siang',
      'Upper Subansiri',
      'West Kameng',
      'West Siang', 'Baksa',
      'Barpeta',
      'Bongaigaon',
      'Cachar',
      'Chirang',
      'Darrang',
      'Dhemaji',
      'Dima Hasao',
      'Dhubri',
      'Dibrugarh',
      'Goalpara',
      'Golaghat',
      'Hailakandi',
      'Jorhat',
      'Kamrup',
      'Kamrup Metropolitan',
      'Karbi Anglong',
      'Karimganj',
      'Kokrajhar',
      'Lakhimpur',
      'Marigaon',
      'Nagaon',
      'Nalbari',
      'Sibsagar',
      'Sonitpur',
      'Tinsukia',
      'Udalguri', 'Araria',
      'Arwal',
      'Aurangabad',
      'Banka',
      'Begusarai',
      'Bhagalpur',
      'Bhojpur',
      'Buxar',
      'Darbhanga',
      'East Champaran',
      'Gaya',
      'Gopalganj',
      'Jamui',
      'Jehanabad',
      'Kaimur',
      'Katihar',
      'Khagaria',
      'Kishanganj',
      'Lakhisarai',
      'Madhepura',
      'Madhubani',
      'Munger',
      'Muzaffarpur',
      'Nalanda',
      'Nawada',
      'Patna',
      'Purnia',
      'Rohtas',
      'Saharsa',
      'Samastipur',
      'Saran',
      'Sheikhpura',
      'Sheohar',
      'Sitamarhi',
      'Siwan',
      'Supaul',
      'Vaishali',
      'West Champaran',
      'Chandigarh', 'Bastar',
      'Bijapur',
      'Bilaspur',
      'Dantewada',
      'Dhamtari',
      'Durg',
      'Jashpur',
      'Janjgir-Champa',
      'Korba',
      'Koriya',
      'Kanker',
      'Kabirdham (Kawardha)',
      'Mahasamund',
      'Narayanpur',
      'Raigarh',
      'Rajnandgaon',
      'Raipur',
      'Surguja', 'Dadra and Nagar Haveli', 'Daman',
      'Diu', 'Central Delhi',
      'East Delhi',
      'New Delhi',
      'North Delhi',
      'North East Delhi',
      'North West Delhi',
      'South Delhi',
      'South West Delhi',
      'West Delhi', 'North Goa',
      'South Goa', 'Ahmedabad',
      'Amreli district',
      'Anand',
      'Banaskantha',
      'Bharuch',
      'Bhavnagar',
      'Dahod',
      'The Dangs',
      'Gandhinagar',
      'Jamnagar',
      'Junagadh',
      'Kutch',
      'Kheda',
      'Mehsana',
      'Narmada',
      'Navsari',
      'Patan',
      'Panchmahal',
      'Porbandar',
      'Rajkot',
      'Sabarkantha',
      'Surendranagar',
      'Surat',
      'Vyara',
      'Vadodara',
      'Valsad', 'Ambala',
      'Bhiwani',
      'Faridabad',
      'Fatehabad',
      'Gurgaon',
      'Hissar',
      'Jhajjar',
      'Jind',
      'Karnal',
      'Kaithal',
      'Kurukshetra',
      'Mahendragarh',
      'Mewat',
      'Palwal',
      'Panchkula',
      'Panipat',
      'Rewari',
      'Rohtak',
      'Sirsa',
      'Sonipat',
      'Yamuna Nagar', 'Bilaspur',
      'Chamba',
      'Hamirpur',
      'Kangra',
      'Kinnaur',
      'Kullu',
      'Lahaul and Spiti',
      'Mandi',
      'Shimla',
      'Sirmaur',
      'Solan',
      'Una', 'Anantnag',
      'Badgam',
      'Bandipora',
      'Baramulla',
      'Doda',
      'Ganderbal',
      'Jammu',
      'Kargil',
      'Kathua',
      'Kishtwar',
      'Kupwara',
      'Kulgam',
      'Leh',
      'Poonch',
      'Pulwama',
      'Rajauri',
      'Ramban',
      'Reasi',
      'Samba',
      'Shopian',
      'Srinagar',
      'Udhampur', 'Bokaro',
      'Chatra',
      'Deoghar',
      'Dhanbad',
      'Dumka',
      'East Singhbhum',
      'Garhwa',
      'Giridih',
      'Godda',
      'Gumla',
      'Hazaribag',
      'Jamtara',
      'Khunti',
      'Koderma',
      'Latehar',
      'Lohardaga',
      'Pakur',
      'Palamu',
      'Ramgarh',
      'Ranchi',
      'Sahibganj',
      'Seraikela Kharsawan',
      'Simdega',
      'West Singhbhum', 'Bagalkot',
      'Bangalore Rural',
      'Bangalore Urban',
      'Belgaum',
      'Bellary',
      'Bidar',
      'Bijapur',
      'Chamarajnagar',
      'Chikkamagaluru',
      'Chikkaballapur',
      'Chitradurga',
      'Davanagere',
      'Dharwad',
      'Dakshina Kannada',
      'Gadag',
      'Gulbarga',
      'Hassan',
      'Haveri district',
      'Kodagu',
      'Kolar',
      'Koppal',
      'Mandya',
      'Mysore',
      'Raichur',
      'Shimoga',
      'Tumkur',
      'Udupi',
      'Uttara Kannada',
      'Ramanagara',
      'Yadgir', 'Alappuzha',
      'Ernakulam',
      'Idukki',
      'Kannur',
      'Kasaragod',
      'Kollam',
      'Kottayam',
      'Kozhikode',
      'Malappuram',
      'Palakkad',
      'Pathanamthitta',
      'Thrissur',
      'Thiruvananthapuram',
      'Wayanad', 'Alirajpur',
      'Anuppur',
      'Ashok Nagar',
      'Balaghat',
      'Barwani',
      'Betul',
      'Bhind',
      'Bhopal',
      'Burhanpur',
      'Chhatarpur',
      'Chhindwara',
      'Damoh',
      'Datia',
      'Dewas',
      'Dhar',
      'Dindori',
      'Guna',
      'Gwalior',
      'Harda',
      'Hoshangabad',
      'Indore',
      'Jabalpur',
      'Jhabua',
      'Katni',
      'Khandwa (East Nimar)',
      'Khargone (West Nimar)',
      'Mandla',
      'Mandsaur',
      'Morena',
      'Narsinghpur',
      'Neemuch',
      'Panna',
      'Rewa',
      'Rajgarh',
      'Ratlam',
      'Raisen',
      'Sagar',
      'Satna',
      'Sehore',
      'Seoni',
      'Shahdol',
      'Shajapur',
      'Sheopur',
      'Shivpuri',
      'Sidhi',
      'Singrauli',
      'Tikamgarh',
      'Ujjain',
      'Umaria',
      'Vidisha', 'Ahmednagar',
      'Akola',
      'Amravati',
      'Aurangabad',
      'Bhandara',
      'Beed',
      'Buldhana',
      'Chandrapur',
      'Dhule',
      'Gadchiroli',
      'Gondia',
      'Hingoli',
      'Jalgaon',
      'Jalna',
      'Kolhapur',
      'Latur',
      'Mumbai City',
      'Mumbai suburban',
      'Nandurbar',
      'Nanded',
      'Nagpur',
      'Nashik',
      'Osmanabad',
      'Parbhani',
      'Pune',
      'Raigad',
      'Ratnagiri',
      'Sindhudurg',
      'Sangli',
      'Solapur',
      'Satara',
      'Thane',
      'Wardha',
      'Washim',
      'Yavatmal', 'East Garo Hills',
      'East Khasi Hills',
      'Jaintia Hills',
      'Ri Bhoi',
      'South Garo Hills',
      'West Garo Hills',
      'West Khasi Hills', 'Aizawl',
      'Champhai',
      'Kolasib',
      'Lawngtlai',
      'Lunglei',
      'Mamit',
      'Saiha',
      'Serchhip', 'Dimapur',
      'Kohima',
      'Mokokchung',
      'Mon',
      'Phek',
      'Tuensang',
      'Wokha',
      'Zunheboto', 'Angul',
      'Boudh (Bauda)',
      'Bhadrak',
      'Balangir',
      'Bargarh (Baragarh)',
      'Balasore',
      'Cuttack',
      'Debagarh (Deogarh)',
      'Dhenkanal',
      'Ganjam',
      'Gajapati',
      'Jharsuguda',
      'Jajpur',
      'Jagatsinghpur',
      'Khordha',
      'Kendujhar (Keonjhar)',
      'Kalahandi',
      'Kandhamal',
      'Koraput',
      'Kendrapara',
      'Malkangiri',
      'Mayurbhanj',
      'Nabarangpur',
      'Nuapada',
      'Nayagarh',
      'Puri',
      'Rayagada',
      'Sambalpur',
      'Subarnapur (Sonepur)',
      'Sundergarh', 'Karaikal',
      'Mahe',
      'Pondicherry',
      'Yanam', 'Amritsar',
      'Barnala',
      'Bathinda',
      'Firozpur',
      'Faridkot',
      'Fatehgarh Sahib',
      'Fazilka',
      'Gurdaspur',
      'Hoshiarpur',
      'Jalandhar',
      'Kapurthala',
      'Ludhiana',
      'Mansa',
      'Moga',
      'Sri Muktsar Sahib',
      'Pathankot',
      'Patiala',
      'Rupnagar',
      'Ajitgarh (Mohali)',
      'Sangrur',
      'Nawanshahr',
      'Tarn Taran', 'Ajmer',
      'Alwar',
      'Bikaner',
      'Barmer',
      'Banswara',
      'Bharatpur',
      'Baran',
      'Bundi',
      'Bhilwara',
      'Churu',
      'Chittorgarh',
      'Dausa',
      'Dholpur',
      'Dungapur',
      'Ganganagar',
      'Hanumangarh',
      'Jhunjhunu',
      'Jalore',
      'Jodhpur',
      'Jaipur',
      'Jaisalmer',
      'Jhalawar',
      'Karauli',
      'Kota',
      'Nagaur',
      'Pali',
      'Pratapgarh',
      'Rajsamand',
      'Sikar',
      'Sawai Madhopur',
      'Sirohi',
      'Tonk',
      'Udaipur', 'East Sikkim',
      'North Sikkim',
      'South Sikkim',
      'West Sikkim', 'Ariyalur',
      'Chennai',
      'Coimbatore',
      'Cuddalore',
      'Dharmapuri',
      'Dindigul',
      'Erode',
      'Kanchipuram',
      'Kanyakumari',
      'Karur',
      'Madurai',
      'Nagapattinam',
      'Nilgiris',
      'Namakkal',
      'Perambalur',
      'Pudukkottai',
      'Ramanathapuram',
      'Salem',
      'Sivaganga',
      'Tirupur',
      'Tiruchirappalli',
      'Theni',
      'Tirunelveli',
      'Thanjavur',
      'Thoothukudi',
      'Tiruvallur',
      'Tiruvarur',
      'Tiruvannamalai',
      'Vellore',
      'Viluppuram',
      'Virudhunagar', 'Dhalai',
      'North Tripura',
      'South Tripura',
      'Khowai',
      'West Tripura', 'Agra',
      'Allahabad',
      'Aligarh',
      'Ambedkar Nagar',
      'Auraiya',
      'Azamgarh',
      'Barabanki',
      'Budaun',
      'Bagpat',
      'Bahraich',
      'Bijnor',
      'Ballia',
      'Banda',
      'Balrampur',
      'Bareilly',
      'Basti',
      'Bulandshahr',
      'Chandauli',
      'Chhatrapati Shahuji Maharaj Nagar',
      'Chitrakoot',
      'Deoria',
      'Etah',
      'Kanshi Ram Nagar',
      'Etawah',
      'Firozabad',
      'Farrukhabad',
      'Fatehpur',
      'Faizabad',
      'Gautam Buddh Nagar',
      'Gonda',
      'Ghazipur',
      'Gorakhpur',
      'Ghaziabad',
      'Hamirpur',
      'Hardoi',
      'Mahamaya Nagar',
      'Jhansi',
      'Jalaun',
      'Jyotiba Phule Nagar',
      'Jaunpur district',
      'Ramabai Nagar (Kanpur Dehat)',
      'Kannauj',
      'Kanpur',
      'Kaushambi',
      'Kushinagar',
      'Lalitpur',
      'Lakhimpur Kheri',
      'Lucknow',
      'Mau',
      'Meerut',
      'Maharajganj',
      'Mahoba',
      'Mirzapur',
      'Moradabad',
      'Mainpuri',
      'Mathura',
      'Muzaffarnagar',
      'Panchsheel Nagar district (Hapur)',
      'Pilibhit',
      'Shamli',
      'Pratapgarh',
      'Rampur',
      'Raebareli',
      'Saharanpur',
      'Sitapur',
      'Shahjahanpur',
      'Sant Kabir Nagar',
      'Siddharthnagar',
      'Sonbhadra',
      'Sant Ravidas Nagar',
      'Sultanpur',
      'Shravasti',
      'Unnao',
      'Varanasi', 'Almora',
      'Bageshwar',
      'Chamoli',
      'Champawat',
      'Dehradun',
      'Haridwar',
      'Nainital',
      'Pauri Garhwal',
      'Pithoragarh',
      'Rudraprayag',
      'Tehri Garhwal',
      'Udham Singh Nagar',
      'Uttarkashi', 'Birbhum',
      'Bankura',
      'Bardhaman',
      'Darjeeling',
      'Dakshin Dinajpur',
      'Hooghly',
      'Howrah',
      'Jalpaiguri',
      'Cooch Behar',
      'Kolkata',
      'Maldah',
      'Paschim Medinipur',
      'Purba Medinipur',
      'Murshidabad',
      'Nadia',
      'North 24 Parganas',
      'South 24 Parganas',
      'Purulia',
      'Uttar Dinajpur'
    ]




    $("#loc").autocomplete({

      source: myloc
    });


  }

  
  const validate = (obj) =>{

      obj.preventDefault();
      let errorlist = {};
      let formstatus = true;
      //alert(name);
      if(pname==""){
          
         
          errorlist['nameerror'] = "Invalid Name";
          formstatus = false;
         
      }else{
         
          errorlist['nameerror'] = "";
         
      }
     // return false;
     updateError(errorlist);
      //console.log(errorlist);
      
      //mobile validation
      var mpattern = /^[2-9]\d{9}$/;

      if(!mpattern.test(pphone)){
          
         
          errorlist['mobileerror'] = "Invalid Mobile No";
          formstatus = false;
         
      }else{
         
          errorlist['mobileerror'] = "";
         
      }

      //password validation

      //var ppattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$";
      if((ppassword=="" || ppassword.length<6 || ppassword.length>8)){
          errorlist['passworderror'] = "Password Between 8 to 10 Alpha & Special Charc";
          formstatus = false;
      }else{
          errorlist['passworderror'] = "";

      }
      //validation for Address

      if(paddress ==""){

          errorlist['addresserror'] = "Invalid Address";
          formstatus = false;
      }else{
          errorlist['addresserror'] ="";
      }
     
     // return false;
     updateError(errorlist);
     if( formstatus == true){
      alert("Success:Submit State data to Backend");
     }
  }



  return (


    <div className='container-fluid m-2 p-3'>

      <div className='row'>
        <div className='col-lg-3'>
          <span>
            <img src="./hhomeslogo.png" style={{ "height": "20px" }}></img>
          </span>
        </div>
        <div className='col-lg-9'>
          <form class="d-flex me-2">
            <input className="form-control me-2 rounded shadow" id="loc" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
          </form>
        </div>
        <div className="App">

          {/*  <!-- Login modal --!> */}
          <form action="#" method="POST" onSubmit={validate}>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
          >
            <div className='container-fluid'>
            
              <div className='row'>

                <span className='text-danger text-center'>{message}</span>
              </div>
              
                <div className='m-3'>

                <em>*</em> <label className='m-2'>Email/Username </label>
                <input type='text' className='form-control' required onChange={obj => pickUsername(obj.target.value)} value={pname} ></input>
                <i className='text-danger'>{errorlist.nameerror}</i>
              </div>
              <div className='m-3'>
                <em>*</em> <label className='m-2'>Password</label>
                <input type='password' className='form-control' required onChange={obj => pickPassword(obj.target.value)} value={ppassword}></input>
                <i className='text-danger'>{errorlist.passworderror}</i>
              </div>
              
            </div>
           
            <div className='container'>
              <div className='row'>
                <span className='text-center text-danger m-1'>(*) All Marked Fields are Manditory..!</span>
                <button className='btn btn-success text-white text-center mb-1' onClick={logindata}>Submit</button>
                <button className='btn btn-danger text-white text-center' onClick={() => setModalOpen(false)}>Close Modal</button>
              </div>
            </div>
           
          </Modal>
          </form>
          {/* <!-- Register Modal -- !> */}
          <form action="#" method="POST" onSubmit={validate}>
          <Modal
            isOpen={modalRegi}
            onRequestClose={() => setModalTrue(false)}
            style={customStyles}
          >
            <div className='container-fluid'>
            
              <div className='row'>

                <span className='text-danger text-center'>{message}</span>
              </div>
              <div className='m-3'>
                <em>*</em> <label className='m-2'>Email/Username</label>
                <input type='text' className='form-control' onChange={obj => pickUsername(obj.target.value)} value={pname} required ></input>
                <i className='text-danger'>{errorlist.nameerror}</i>
              </div>
              <div className='m-3'>
                <em>*</em> <label className='m-2'>Password</label>
                <input type='password' className='form-control' onChange={obj => pickPassword(obj.target.value)} value={ppassword} required ></input>
                <i className='text-danger'>{errorlist.passworderror}</i>
              </div>
            </div>
            <div className='m-3'>
              <label className='m-2'>PhoneNumber</label>
              <input type='text' className='form-control' onChange={obj => pickPhonenumber(obj.target.value)} value={pphone} required></input>
              <i className='text-danger'>{errorlist.mobileerror}</i>
            </div>
            <div className='m-3'>
              <em>*</em> <label className='m-2'>Address</label>
              <input type='text' className='form-control' onChange={obj => pickAddress(obj.target.value)} value={paddress} required></input>
              <i className='text-danger'>{errorlist.addresserror}</i>
            </div>
            <div className='container'>
              <div className='row'>
                <span className='text-center text-danger m-1'>(*) All Marked Fields are Manditory..!</span>
                <button className='btn btn-success text-white text-center mb-1' onClick={openregister}>SaveChanges</button>
                <button className='btn btn-danger text-white text-center' onClick={() => setModalTrue(false)}>Close Modal</button>
              </div>
              
            </div>

          </Modal>
          </form>

          <div className='container-fluid'>

            <div className='row m-3'>
              <marquee className="martext" width="100%" direction="toggle" height="50px">
                Hi,Here Our Motive is to give Services to
                our beloved Customers to essaily get to know the Vacant Hotels and Houses for Rent with Food
                and they can feel userfriendly with Our out bound Services and Feel Happy and keep our customers Satisfied
                we will share our Office contact details and aswell as Vacant houses and Hotels Contact numbers once you Registered in site
                After Get login you can feel free to select the place to visit and Enjoy happy happy Vacation... @Happy Homes!
              </marquee>
            </div>
            <ul className='topnav'>
              <li>
                <Link href="/" className="mylink">Home</Link>
              </li>
              <li>
                <Link href="/" className="mylink" data-bs-toggle="modal" data-bs-target="#login" onClick={() => setModalOpen(true)}>Login</Link>

              </li>
              <li>
                <Link href="/" className="mylink" onClick={() => setModalTrue(true)}>Signup</Link>
              </li>
              <li>
                <Link href="/Services" className="mylink">Services</Link>
              </li>
              <li>
                <Link href="/About" className="mylink">Aboutus</Link>
              </li>
              <li>
                <Link href="/Cart" className="mylink">CartItems</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='headerdiv'>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
                  <img src="./1.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="./hhomeslogo.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="./1.jpg" class="d-block w-100" alt="..."/>
                </div>
              </div>
              <div class="carousel-item">
                  <img src="././1.jpg.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="./hhomeslogo.png" class="d-block w-100" alt="..."/>
                </div>
              <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                <span class="sr-only">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="false"></span>
                <span class="sr-only">Next</span>
              </button>
            </div>

        </div>
        <div className="container-fluid m-5">
          <div className='row'>
              <Footer/>
          </div>
        </div>
    </div>
      )
}

