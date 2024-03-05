import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import loadingIcon from '../Assets/loading.gif';
import logo from '../Assets/logo2.png';

import { IoIosArrowDown, IoIosWarning } from "react-icons/io";
import { IoArrowBackCircleSharp } from "react-icons/io5";



const BridgeForm = ({onSubmit }) => {
  
  const [country, setCountry] = useState('');
  const [admin1countryCode , setCountryCode1] = useState('');
  const [admin2countryCode , setCountryCode2] = useState('');
  const [admin3countryCode , setCountryCode3] = useState('');
  const [manager1countryCode , setCountryCode4] = useState('');
  const [manager2countryCode , setCountryCode5] = useState('');
  const [manager3countryCode , setCountryCode6] = useState('');
  const [manager4countryCode , setCountryCode7] = useState('');
  const [manager5countryCode , setCountryCode8] = useState('');
  const [manager6countryCode , setCountryCode9] = useState('');
  const [owner1countryCode , setCountryCode10] = useState('');
  const [owner2countryCode , setCountryCode11] = useState('');
  const [owner3countryCode , setCountryCode12] = useState('');
  const [state, setState] = useState('');
  const [coordinates, setCoordinates] =useState('');
  const [division, setDivision] = useState('');
  const [bridgeName, setBridgeName] = useState('');
  const [location, setlocation] = useState('');
  const [nobridgespan, setnobridgespan] = useState('1');
  const [noofgirders, setnoofgirders] = useState('1');

  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const countries = ['India', 'USA', 'Australia']; 
  const statesByCountry = {
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
    USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    Australia: ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
  }; 

  
  const[showUserForm, setShowUserForm] = useState(false);
  const[showBridgeForm, setShowBridgeForm] = useState(true);

  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showManagerForm, setShowManagerForm] = useState(false);
  const [showOwnerForm, setShowOwnerForm] = useState(false); 

  const [showBridgeDetailsError, setshowBridgeDetailsError] = useState(false);
  const [showUserError0, setshowUserError0] =useState(false);
  const [showUserError1, setshowUserError1] =useState(false);
  const [showUserError2, setshowUserError2] =useState(false);


  const [showUserError3, setshowUserError3] =useState(false);

  const [showUserError31, setshowUserError31] =useState(false);
  const [showUserError32, setshowUserError32] =useState(false);
  const [showUserError33, setshowUserError33] =useState(false);
  const [showUserError34, setshowUserError34] =useState(false);
  const [showUserError35, setshowUserError35] =useState(false);
  const [showUserError36, setshowUserError36] =useState(false);
  const [showUserError37, setshowUserError37] =useState(false);
  const [showUserError38, setshowUserError38] =useState(false);
  const [showUserError39, setshowUserError39] =useState(false);

  const [showUserError31a, setshowUserError31a] =useState(false);
  const [showUserError32b, setshowUserError32b] =useState(false);
  const [showUserError33c, setshowUserError33c] =useState(false);
  const [showUserError34d, setshowUserError34d] =useState(false);
  const [showUserError35e, setshowUserError35e] =useState(false);
  const [showUserError36f, setshowUserError36f] =useState(false);
  const [showUserError37g, setshowUserError37g] =useState(false);
  const [showUserError38h, setshowUserError38h] =useState(false);
  const [showUserError39i, setshowUserError39i] =useState(false);


  const [showUserError4, setshowUserError4] =useState(false);

  const [showUserError41, setshowUserError41] =useState(false);
  const [showUserError42, setshowUserError42] =useState(false);
  const [showUserError43, setshowUserError43] =useState(false);
  const [showUserError44, setshowUserError44] =useState(false);
  const [showUserError45, setshowUserError45] =useState(false);
  const [showUserError46, setshowUserError46] =useState(false);
  const [showUserError47, setshowUserError47] =useState(false);
  const [showUserError48, setshowUserError48] =useState(false);
  const [showUserError49, setshowUserError49] =useState(false);

  const [showUserError4a, setshowUserError4a] =useState(false);
  const [showUserError4b, setshowUserError4b] =useState(false);
  const [showUserError4c, setshowUserError4c] =useState(false);
  const [showUserError4d, setshowUserError4d] =useState(false);
  const [showUserError4e, setshowUserError4e] =useState(false);
  const [showUserError4f, setshowUserError4f] =useState(false);
  const [showUserError4g, setshowUserError4g] =useState(false);
  const [showUserError4h, setshowUserError4h] =useState(false);
  const [showUserError4i, setshowUserError4i] =useState(false);

  const [showUserError411, setshowUserError411] =useState(false);
  const [showUserError422, setshowUserError422] =useState(false);
  const [showUserError433, setshowUserError433] =useState(false);
  const [showUserError444, setshowUserError444] =useState(false);
  const [showUserError455, setshowUserError455] =useState(false);
  const [showUserError466, setshowUserError466] =useState(false);
  const [showUserError477, setshowUserError477] =useState(false);
  const [showUserError488, setshowUserError488] =useState(false);
  const [showUserError499, setshowUserError499] =useState(false);
  
  const [showUserError41a, setshowUserError41a] =useState(false);
  const [showUserError42b, setshowUserError42b] =useState(false);
  const [showUserError43c, setshowUserError43c] =useState(false);
  const [showUserError44d, setshowUserError44d] =useState(false);
  const [showUserError45e, setshowUserError45e] =useState(false);
  const [showUserError46f, setshowUserError46f] =useState(false);
  const [showUserError47g, setshowUserError47g] =useState(false);
  const [showUserError48h, setshowUserError48h] =useState(false);
  const [showUserError49i, setshowUserError49i] =useState(false);

  const [showUserError411a, setshowUserError411a] =useState(false);
  const [showUserError422b, setshowUserError422b] =useState(false);
  const [showUserError433c, setshowUserError433c] =useState(false);
  const [showUserError444d, setshowUserError444d] =useState(false);
  const [showUserError455e, setshowUserError455e] =useState(false);
  const [showUserError466f, setshowUserError466f] =useState(false);
  const [showUserError477g, setshowUserError477g] =useState(false);
  const [showUserError488h, setshowUserError488h] =useState(false);
  const [showUserError499i, setshowUserError499i] =useState(false);


  const [showUserError5, setshowUserError5] =useState(false);

  const [showUserError51, setshowUserError51] =useState(false);
  const [showUserError52, setshowUserError52] =useState(false);
  const [showUserError53, setshowUserError53] =useState(false);
  const [showUserError54, setshowUserError54] =useState(false);
  const [showUserError55, setshowUserError55] =useState(false);
  const [showUserError56, setshowUserError56] =useState(false);
  const [showUserError57, setshowUserError57] =useState(false);
  const [showUserError58, setshowUserError58] =useState(false);
  const [showUserError59, setshowUserError59] =useState(false);

  const [showUserError51a, setshowUserError51a] =useState(false);
  const [showUserError52b, setshowUserError52b] =useState(false);
  const [showUserError53c, setshowUserError53c] =useState(false);
  const [showUserError54d, setshowUserError54d] =useState(false);
  const [showUserError55e, setshowUserError55e] =useState(false);
  const [showUserError56f, setshowUserError56f] =useState(false);
  const [showUserError57g, setshowUserError57g] =useState(false);
  const [showUserError58h, setshowUserError58h] =useState(false);
  const [showUserError59i, setshowUserError59i] =useState(false);

  
  const [adminEmail, setAdminEmail] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminPhone, setAdminPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [managerEmail, setManagerEmail] = useState('');
  const [managerName, setManagerName] = useState('');
  const [managerPhone, setManagerPhone] = useState('');

  const [adminEmail2, setAdminEmail2] = useState('');
  const [adminName2, setAdminName2] = useState('');
  const [adminPhone2, setAdminPhone2] = useState('');
  const [ownerEmail2, setOwnerEmail2] = useState('');
  const [ownerName2, setOwnerName2] = useState('');
  const [ownerPhone2, setOwnerPhone2] = useState('');
  const [managerEmail2, setManagerEmail2] = useState('');
  const [managerName2, setManagerName2] = useState('');
  const [managerPhone2, setManagerPhone2] = useState('');

  const [adminEmail3, setAdminEmail3] = useState('');
  const [adminName3, setAdminName3] = useState('');
  const [adminPhone3, setAdminPhone3] = useState('');
  const [ownerEmail3, setOwnerEmail3] = useState('');
  const [ownerName3, setOwnerName3] = useState('');
  const [ownerPhone3, setOwnerPhone3] = useState('');
  const [managerEmail3, setManagerEmail3] = useState('');
  const [managerName3, setManagerName3] = useState('');
  const [managerPhone3, setManagerPhone3] = useState('');

  const [managerEmail4, setManagerEmail4] = useState('');
  const [managerName4, setManagerName4] = useState('');
  const [managerPhone4, setManagerPhone4] = useState('');

  const [managerEmail5, setManagerEmail5] = useState('');
  const [managerName5, setManagerName5] = useState('');
  const [managerPhone5, setManagerPhone5] = useState('');

  const [managerEmail6, setManagerEmail6] = useState('');
  const [managerName6, setManagerName6] = useState('');
  const [managerPhone6, setManagerPhone6] = useState('');


  const handleAddAdmin = () => {
    setShowAdminForm(!showAdminForm);
    setShowManagerForm(false);
    setShowOwnerForm(false);
  };

  const handleAddManager = () => {
    setShowManagerForm(!showManagerForm);
    setShowAdminForm(false);
    setShowOwnerForm(false);
  };

  const handleAddOwner = () => {
    setShowOwnerForm(!showOwnerForm);
    setShowAdminForm(false);
    setShowManagerForm(false);
  };

  const closeForm = () => {
    setShowAdminForm(false);
    setShowManagerForm(false);
    setShowOwnerForm(false);
  };


  const UserForm = async(e) => {
    e.preventDefault();
    if(country === '' || state === '' || nobridgespan==='' || noofgirders==='' || coordinates === '' || division === '' || location === '' || bridgeName === ''){
      setshowBridgeDetailsError(true);
      setTimeout(() => {
        setshowBridgeDetailsError(false);
    }, 5000);
    }
    else{
      setShowUserForm(!showUserForm);
      setShowBridgeForm(false);
    }
  };

  const CancelBridgeForm = () => {
    setCountry('');
    setState('');
    setnobridgespan('');
    setnoofgirders('');
    setDivision('');
    setCoordinates('');
    setBridgeName('');
    setlocation('');
  };

  const Cancel = () => {
    CancelBridgeForm();
  };


  const submitForm = async (e) => {
    e.preventDefault();
    if(adminName ==='' || adminEmail === '' || adminPhone === ''){
      setshowUserError0(true);
      setTimeout(() => {
        setshowUserError0(false);
    }, 5000);
    }
    else if(managerName === '' || managerEmail === '' || managerPhone === ''){
      setshowUserError1(true);
      setTimeout(() => {
        setshowUserError1(false);
    }, 5000);
    }
    else if(ownerName === '' || ownerEmail === '' || ownerPhone === ''){
      setshowUserError2(true);
      setTimeout(() => {
        setshowUserError2(false);
    }, 5000);
    }
    else if(adminPhone.length !== 10){
      setshowUserError3(true);
      setTimeout(() => {
        setshowUserError3(false);
    }, 5000);
    }
    else if(adminName2.length === 0 && adminEmail2.length >  0 && adminPhone2.length === 10){
      setshowUserError31(true);
      setTimeout(() => {
        setshowUserError31(false);
    }, 5000);
    }
    else if(adminName2.length > 0 && adminEmail2.length ===  0 && adminPhone2.length === 10){
      setshowUserError32(true);
      setTimeout(() => {
        setshowUserError32(false);
    }, 5000);
    }
    else if(adminName2.length > 0 && adminEmail2.length >  0 && adminPhone2.length === 0){
      setshowUserError33(true);
      setTimeout(() => {
        setshowUserError33(false);
    }, 5000);
    }
    else if(adminName2.length === 0 && adminEmail2.length >  0 && adminPhone2.length === 0){
      setshowUserError34(true);
      setTimeout(() => {
        setshowUserError34(false);
    }, 5000);
    }
    else if(adminName2.length > 0 && adminEmail2.length ===  0 && adminPhone2.length === 0){
      setshowUserError35(true);
      setTimeout(() => {
        setshowUserError35(false);
    }, 5000);
    }
    else if(adminName2.length === 0 && adminEmail2.length ===  0 && adminPhone2.length === 10){
      setshowUserError36(true);
      setTimeout(() => {
        setshowUserError36(false);
    }, 5000);
    }
    else if(adminName2.length > 0 && adminEmail2.length >  0 && adminPhone2.length !== 10){
      setshowUserError37(true);
      setTimeout(() => {
        setshowUserError37(false);
    }, 5000);
    }
    else if(adminName2.length === 0 && adminEmail2.length >  0 && adminPhone2.length !== 10){
      setshowUserError38(true);
      setTimeout(() => {
        setshowUserError38(false);
    }, 5000);
    }
    else if(adminName2.length > 0 && adminEmail2.length ===  0 && adminPhone2.length !== 10){
      setshowUserError39(true);
      setTimeout(() => {
        setshowUserError39(false);
    }, 5000);
    }
    else if(adminName3.length === 0 && adminEmail3.length >  0 && adminPhone3.length === 10){
      setshowUserError31a(true);
      setTimeout(() => {
        setshowUserError31a(false);
    }, 5000);
    }
    else if(adminName3.length > 0 && adminEmail3.length ===  0 && adminPhone3.length === 10){
      setshowUserError32b(true);
      setTimeout(() => {
        setshowUserError32b(false);
    }, 5000);
    }
    else if(adminName3.length > 0 && adminEmail3.length >  0 && adminPhone3.length === 0){
      setshowUserError33c(true);
      setTimeout(() => {
        setshowUserError33c(false);
    }, 5000);
    }
    else if(adminName3.length === 0 && adminEmail3.length >  0 && adminPhone3.length === 0){
      setshowUserError34d(true);
      setTimeout(() => {
        setshowUserError34d(false);
    }, 5000);
    }
    else if(adminName3.length > 0 && adminEmail3.length ===  0 && adminPhone3.length === 0){
      setshowUserError35e(true);
      setTimeout(() => {
        setshowUserError35e(false);
    }, 5000);
    }
    else if(adminName3.length === 0 && adminEmail3.length ===  0 && adminPhone3.length === 10){
      setshowUserError36f(true);
      setTimeout(() => {
        setshowUserError36f(false);
    }, 5000);
    }
    else if(adminName3.length > 0 && adminEmail3.length >  0 && adminPhone3.length !== 10){
      setshowUserError37g(true);
      setTimeout(() => {
        setshowUserError37g(false);
    }, 5000);
    }
    else if(adminName3.length === 0 && adminEmail3.length >  0 && adminPhone3.length !== 10){
      setshowUserError38h(true);
      setTimeout(() => {
        setshowUserError38h(false);
    }, 5000);
    }
    else if(adminName3.length > 0 && adminEmail3.length ===  0 && adminPhone3.length !== 10){
      setshowUserError39i(true);
      setTimeout(() => {
        setshowUserError39i(false);
    }, 5000);
    }

    
    else if(managerPhone.length !== 10){
      setshowUserError4(true);
      setTimeout(() => {
        setshowUserError4(false);
    }, 5000);
    }
    else if(managerName2.length === 0 && managerEmail2.length >  0 && managerPhone2.length === 10){
      setshowUserError41(true);
      setTimeout(() => {
        setshowUserError41(false);
    }, 5000);
    }
    else if(managerName2.length > 0 && managerEmail2.length ===  0 && managerPhone2.length === 10){
      setshowUserError42(true);
      setTimeout(() => {
        setshowUserError42(false);
    }, 5000);
    }
    else if(managerName2.length > 0 && managerEmail2.length >  0 && managerPhone2.length === 0){
      setshowUserError43(true);
      setTimeout(() => {
        setshowUserError43(false);
    }, 5000);
    }
    else if(managerName2.length === 0 && managerEmail2.length >  0 && managerPhone2.length === 0){
      setshowUserError44(true);
      setTimeout(() => {
        setshowUserError44(false);
    }, 5000);
    }
    else if(managerName2.length > 0 && managerEmail2.length ===  0 && managerPhone2.length === 0){
      setshowUserError45(true);
      setTimeout(() => {
        setshowUserError45(false);
    }, 5000);
    }
    else if(managerName2.length === 0 && managerEmail2.length ===  0 && managerPhone2.length === 10){
      setshowUserError46(true);
      setTimeout(() => {
        setshowUserError46(false);
    }, 5000);
    }
    else if(managerName2.length > 0 && managerEmail2.length >  0 && managerPhone2.length !== 10){
      setshowUserError47(true);
      setTimeout(() => {
        setshowUserError47(false);
    }, 5000);
    }
    else if(managerName2.length === 0 && managerEmail2.length >  0 && managerPhone2.length !== 10){
      setshowUserError48(true);
      setTimeout(() => {
        setshowUserError48(false);
    }, 5000);
    }
    else if(managerName2.length > 0 && managerEmail2.length ===  0 && managerPhone2.length !== 10){
      setshowUserError49(true);
      setTimeout(() => {
        setshowUserError49(false);
    }, 5000);
    }
    else if(managerName3.length === 0 && managerEmail3.length >  0 && managerPhone3.length === 10){
      setshowUserError4a(true);
      setTimeout(() => {
        setshowUserError4a(false);
    }, 5000);
    }
    else if(managerName3.length > 0 && managerEmail3.length ===  0 && managerPhone3.length === 10){
      setshowUserError4b(true);
      setTimeout(() => {
        setshowUserError4b(false);
    }, 5000);
    }
    else if(managerName3.length > 0 && managerEmail3.length >  0 && managerPhone3.length === 0){
      setshowUserError4c(true);
      setTimeout(() => {
        setshowUserError4c(false);
    }, 5000);
    }
    else if(managerName3.length === 0 && managerEmail3.length >  0 && managerPhone3.length === 0){
      setshowUserError4d(true);
      setTimeout(() => {
        setshowUserError4d(false);
    }, 5000);
    }
    else if(managerName3.length > 0 && managerEmail3.length ===  0 && managerPhone3.length === 0){
      setshowUserError4e(true);
      setTimeout(() => {
        setshowUserError4e(false);
    }, 5000);
    }
    else if(managerName3.length === 0 && managerEmail3.length ===  0 && managerPhone3.length === 10){
      setshowUserError4f(true);
      setTimeout(() => {
        setshowUserError4f(false);
    }, 5000);
    }
    else if(managerName3.length > 0 && managerEmail3.length >  0 && managerPhone3.length !== 10){
      setshowUserError4g(true);
      setTimeout(() => {
        setshowUserError4g(false);
    }, 5000);
    }
    else if(managerName3.length === 0 && managerEmail3.length >  0 && managerPhone3.length !== 10){
      setshowUserError4h(true);
      setTimeout(() => {
        setshowUserError4h(false);
    }, 5000);
    }
    else if(managerName3.length > 0 && managerEmail3.length ===  0 && managerPhone3.length !== 10){
      setshowUserError4i(true);
      setTimeout(() => {
        setshowUserError4i(false);
    }, 5000);
    }

    else if(managerName4.length === 0 && managerEmail4.length >  0 && managerPhone4.length === 10){
      setshowUserError411(true);
      setTimeout(() => {
        setshowUserError411(false);
    }, 5000);
    }
    else if(managerName4.length > 0 && managerEmail4.length ===  0 && managerPhone4.length === 10){
      setshowUserError422(true);
      setTimeout(() => {
        setshowUserError422(false);
    }, 5000);
    }
    else if(managerName4.length > 0 && managerEmail4.length >  0 && managerPhone4.length === 0){
      setshowUserError433(true);
      setTimeout(() => {
        setshowUserError433(false);
    }, 5000);
    }
    else if(managerName4.length === 0 && managerEmail4.length >  0 && managerPhone4.length === 0){
      setshowUserError444(true);
      setTimeout(() => {
        setshowUserError444(false);
    }, 5000);
    }
    else if(managerName4.length > 0 && managerEmail4.length ===  0 && managerPhone4.length === 0){
      setshowUserError455(true);
      setTimeout(() => {
        setshowUserError455(false);
    }, 5000);
    }
    else if(managerName4.length === 0 && managerEmail4.length ===  0 && managerPhone4.length === 10){
      setshowUserError466(true);
      setTimeout(() => {
        setshowUserError466(false);
    }, 5000);
    }
    else if(managerName4.length > 0 && managerEmail4.length >  0 && managerPhone4.length !== 10){
      setshowUserError477(true);
      setTimeout(() => {
        setshowUserError477(false);
    }, 5000);
    }
    else if(managerName4.length === 0 && managerEmail4.length >  0 && managerPhone4.length !== 10){
      setshowUserError488(true);
      setTimeout(() => {
        setshowUserError488(false);
    }, 5000);
    }
    else if(managerName4.length > 0 && managerEmail4.length ===  0 && managerPhone4.length !== 10){
      setshowUserError499(true);
      setTimeout(() => {
        setshowUserError499(false);
    }, 5000);
    }
    else if(managerName5.length === 0 && managerEmail5.length >  0 && managerPhone5.length === 10){
      setshowUserError41a(true);
      setTimeout(() => {
        setshowUserError41a(false);
    }, 5000);
    }
    else if(managerName5.length > 0 && managerEmail5.length ===  0 && managerPhone5.length === 10){
      setshowUserError42b(true);
      setTimeout(() => {
        setshowUserError42b(false);
    }, 5000);
    }
    else if(managerName5.length > 0 && managerEmail5.length >  0 && managerPhone5.length === 0){
      setshowUserError43c(true);
      setTimeout(() => {
        setshowUserError43c(false);
    }, 5000);
    }
    else if(managerName5.length === 0 && managerEmail5.length >  0 && managerPhone5.length === 0){
      setshowUserError44d(true);
      setTimeout(() => {
        setshowUserError44d(false);
    }, 5000);
    }
    else if(managerName5.length > 0 && managerEmail5.length ===  0 && managerPhone5.length === 0){
      setshowUserError45e(true);
      setTimeout(() => {
        setshowUserError45e(false);
    }, 5000);
    }
    else if(managerName5.length === 0 && managerEmail5.length ===  0 && managerPhone5.length === 10){
      setshowUserError46f(true);
      setTimeout(() => {
        setshowUserError46f(false);
    }, 5000);
    }
    else if(managerName5.length > 0 && managerEmail5.length >  0 && managerPhone5.length !== 10){
      setshowUserError47g(true);
      setTimeout(() => {
        setshowUserError47g(false);
    }, 5000);
    }
    else if(managerName5.length === 0 && managerEmail5.length >  0 && managerPhone5.length !== 10){
      setshowUserError48h(true);
      setTimeout(() => {
        setshowUserError48h(false);
    }, 5000);
    }
    else if(managerName5.length > 0 && managerEmail5.length ===  0 && managerPhone5.length !== 10){
      setshowUserError49i(true);
      setTimeout(() => {
        setshowUserError49i(false);
    }, 5000);
    }
    else if(managerName6.length === 0 && managerEmail6.length >  0 && managerPhone6.length === 10){
      setshowUserError411a(true);
      setTimeout(() => {
        setshowUserError411a(false);
    }, 5000);
    }
    else if(managerName6.length > 0 && managerEmail6.length ===  0 && managerPhone6.length === 10){
      setshowUserError422b(true);
      setTimeout(() => {
        setshowUserError422b(false);
    }, 5000);
    }
    else if(managerName6.length > 0 && managerEmail6.length >  0 && managerPhone6.length === 0){
      setshowUserError433c(true);
      setTimeout(() => {
        setshowUserError433c(false);
    }, 5000);
    }
    else if(managerName6.length === 0 && managerEmail6.length >  0 && managerPhone6.length === 0){
      setshowUserError444d(true);
      setTimeout(() => {
        setshowUserError444d(false);
    }, 5000);
    }
    else if(managerName6.length > 0 && managerEmail6.length ===  0 && managerPhone6.length === 0){
      setshowUserError455e(true);
      setTimeout(() => {
        setshowUserError455e(false);
    }, 5000);
    }
    else if(managerName6.length === 0 && managerEmail6.length ===  0 && managerPhone6.length === 10){
      setshowUserError466f(true);
      setTimeout(() => {
        setshowUserError466f(false);
    }, 5000);
    }
    else if(managerName6.length > 0 && managerEmail6.length >  0 && managerPhone6.length !== 10){
      setshowUserError477g(true);
      setTimeout(() => {
        setshowUserError477g(false);
    }, 5000);
    }
    else if(managerName6.length === 0 && managerEmail6.length >  0 && managerPhone6.length !== 10){
      setshowUserError488h(true);
      setTimeout(() => {
        setshowUserError488h(false);
    }, 5000);
    }
    else if(managerName6.length > 0 && managerEmail6.length ===  0 && managerPhone6.length !== 10){
      setshowUserError499i(true);
      setTimeout(() => {
        setshowUserError499i(false);
    }, 5000);
    }


    else if(ownerPhone.length !== 10){
      setshowUserError5(true);
      setTimeout(() => {
        setshowUserError5(false);
    }, 5000);
    }
    else if(ownerName2.length === 0 && ownerEmail2.length >  0 && ownerPhone2.length === 10){
      setshowUserError51(true);
      setTimeout(() => {
        setshowUserError51(false);
    }, 5000);
    }
    else if(ownerName2.length > 0 && ownerEmail2.length ===  0 && ownerPhone2.length === 10){
      setshowUserError52(true);
      setTimeout(() => {
        setshowUserError52(false);
    }, 5000);
    }
    else if(ownerName2.length > 0 && ownerEmail2.length >  0 && ownerPhone2.length === 0){
      setshowUserError53(true);
      setTimeout(() => {
        setshowUserError53(false);
    }, 5000);
    }
    else if(ownerName2.length === 0 && ownerEmail2.length >  0 && ownerPhone2.length === 0){
      setshowUserError54(true);
      setTimeout(() => {
        setshowUserError54(false);
    }, 5000);
    }
    else if(ownerName2.length > 0 && ownerEmail2.length ===  0 && ownerPhone2.length === 0){
      setshowUserError55(true);
      setTimeout(() => {
        setshowUserError55(false);
    }, 5000);
    }
    else if(ownerName2.length === 0 && ownerEmail2.length ===  0 && ownerPhone2.length === 10){
      setshowUserError56(true);
      setTimeout(() => {
        setshowUserError56(false);
    }, 5000);
    }
    else if(ownerName2.length > 0 && ownerEmail2.length >  0 && ownerPhone2.length !== 10){
      setshowUserError57(true);
      setTimeout(() => {
        setshowUserError57(false);
    }, 5000);
    }
    else if(ownerName2.length === 0 && ownerEmail2.length >  0 && ownerPhone2.length !== 10){
      setshowUserError58(true);
      setTimeout(() => {
        setshowUserError58(false);
    }, 5000);
    }
    else if(ownerName2.length > 0 && ownerEmail2.length ===  0 && ownerPhone2.length !== 10){
      setshowUserError59(true);
      setTimeout(() => {
        setshowUserError59(false);
    }, 5000);
    }
    else if(ownerName3.length === 0 && ownerEmail3.length >  0 && ownerPhone3.length === 10){
      setshowUserError51a(true);
      setTimeout(() => {
        setshowUserError51a(false);
    }, 5000);
    }
    else if(ownerName3.length > 0 && ownerEmail3.length ===  0 && ownerPhone3.length === 10){
      setshowUserError52b(true);
      setTimeout(() => {
        setshowUserError52b(false);
    }, 5000);
    }
    else if(ownerName3.length > 0 && ownerEmail3.length >  0 && ownerPhone3.length === 0){
      setshowUserError53c(true);
      setTimeout(() => {
        setshowUserError53c(false);
    }, 5000);
    }
    else if(ownerName3.length === 0 && ownerEmail3.length >  0 && ownerPhone3.length === 0){
      setshowUserError54d(true);
      setTimeout(() => {
        setshowUserError54d(false);
    }, 5000);
    }
    else if(ownerName3.length > 0 && ownerEmail3.length ===  0 && ownerPhone3.length === 0){
      setshowUserError55e(true);
      setTimeout(() => {
        setshowUserError55e(false);
    }, 5000);
    }
    else if(ownerName3.length === 0 && ownerEmail3.length ===  0 && ownerPhone3.length === 10){
      setshowUserError56f(true);
      setTimeout(() => {
        setshowUserError56f(false);
    }, 5000);
    }
    else if(ownerName3.length > 0 && ownerEmail3.length >  0 && ownerPhone3.length !== 10){
      setshowUserError57g(true);
      setTimeout(() => {
        setshowUserError57g(false);
    }, 5000);
    }
    else if(ownerName3.length === 0 && ownerEmail3.length >  0 && ownerPhone3.length !== 10){
      setshowUserError58h(true);
      setTimeout(() => {
        setshowUserError58h(false);
    }, 5000);
    }
    else if(ownerName3.length > 0 && ownerEmail3.length ===  0 && ownerPhone3.length !== 10){
      setshowUserError59i(true);
      setTimeout(() => {
        setshowUserError59i(false);
    }, 5000);
    }
    else{
        try {
          setLoading(true);
          const response = await axios.post('http://localhost:9090/bridge/register', {
            country:country,
            state:state,
            nobridgespan:nobridgespan,
            noofgirders:noofgirders,
            division:division,
            coordinates:coordinates,
            bridgeName:bridgeName,
            location:location,

            admin1countryCode: admin1countryCode,
            admin2countryCode: admin2countryCode,
            admin3countryCode: admin3countryCode,

            owner1countryCode: owner1countryCode,
            owner2countryCode: owner2countryCode,
            owner3countryCode: owner3countryCode,

            manager1countryCode: manager1countryCode,
            manager2countryCode: manager2countryCode,
            manager3countryCode: manager3countryCode,
            manager4countryCode: manager4countryCode,
            manager5countryCode: manager5countryCode,
            manager6countryCode: manager6countryCode,

            adminEmail: adminEmail,
            adminName: adminName,
            adminPhone: adminPhone,
            managerEmail: managerEmail,
            managerName: managerName,
            managerPhone: managerPhone,
            ownerEmail: ownerEmail,
            ownerName: ownerName,
            ownerPhone: ownerPhone,

            adminEmail2: adminEmail2,
            adminName2: adminName2,
            adminPhone2: adminPhone2,
            managerEmail2: managerEmail2,
            managerName2: managerName2,
            managerPhone2: managerPhone2,
            ownerEmail2: ownerEmail2,
            ownerName2: ownerName2,
            ownerPhone2: ownerPhone2,

            adminEmail3: adminEmail3,
            adminName3: adminName3,
            adminPhone3: adminPhone3,
            managerEmail3: managerEmail3,
            managerName3: managerName3,
            managerPhone3: managerPhone3,
            ownerEmail3: ownerEmail3,
            ownerName3: ownerName3,
            ownerPhone3: ownerPhone3,

            managerEmail4: managerEmail4,
            managerName4: managerName4,
            managerPhone4: managerPhone4,

            managerEmail5: managerEmail5,
            managerName5: managerName5,
            managerPhone5: managerPhone5,
            
            managerEmail6: managerEmail6,
            managerName6: managerName6,
            managerPhone6: managerPhone6,
          });

          const bridgeId = response.data.id;
          localStorage.setItem('bid',bridgeId);
          localStorage.setItem('country', country);
          localStorage.setItem('state', state);
          localStorage.setItem('noofgirders', noofgirders);
          localStorage.setItem('nobridgespan', nobridgespan);
          localStorage.setItem('division', division);
          localStorage.setItem('coordinates', coordinates);
          localStorage.setItem('location', location);
          localStorage.setItem('bridgeName', bridgeName);

          localStorage.setItem('ownerName', ownerName);
          localStorage.setItem('ownerName2', ownerName2);
          localStorage.setItem('ownerName3', ownerName3);

          localStorage.setItem('managerName', managerName);
          localStorage.setItem('managerName2', managerName2);
          localStorage.setItem('managerName3', managerName3);
          localStorage.setItem('managerName4', managerName4);
          localStorage.setItem('managerName5', managerName5);
          localStorage.setItem('managerName6', managerName6);

          localStorage.setItem('adminName', adminName);
          localStorage.setItem('adminName2', adminName2);
          localStorage.setItem('adminName3', adminName3);

          console.log('Backend response:', response.data);
          navigate('/home/bridgeform/sensorform');
          if (response.data.message.includes('User details do not match.')) {
            alert('User registration failed. existing user field not matched.');
        } else {
            navigate('/home/bridgeform/sensorform');
            if (onSubmit) {
                onSubmit();
            }
          }
        } catch (error) {
          console.error('Error submitting form', error);
        } finally {
          setLoading(false);
        }
      };
  };


    const resetForm = () => {
    
        setAdminEmail('');
        setAdminName('');
        setAdminPhone('');
        setManagerName('');
        setManagerEmail('');
        setManagerPhone('');
        setOwnerName('');
        setOwnerEmail('');
        setOwnerPhone('');

        setAdminEmail2('');
        setAdminName2('');
        setAdminPhone2('');
        setManagerName2('');
        setManagerEmail2('');
        setManagerPhone2('');
        setOwnerName2('');
        setOwnerEmail2('');
        setOwnerPhone2('');

        setAdminEmail3('');
        setAdminName3('');
        setAdminPhone3('');
        setManagerName3('');
        setManagerEmail3('');
        setManagerPhone3('');
        setOwnerName3('');
        setOwnerEmail3('');
        setOwnerPhone3('');

        setManagerName4('');
        setManagerEmail4('');
        setManagerPhone4('');

        setManagerName5('');
        setManagerEmail5('');
        setManagerPhone5('');

        setManagerName6('');
        setManagerEmail6('');
        setManagerPhone6('');

        closeForm();
      };

      const onCancel = () => {
        resetForm();
      };

      const PrevFrom = () => {
        setShowBridgeForm(!showBridgeForm);
        setShowUserForm(false);
      };

      const backHome = () => {
        navigate('/home')
      }



  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
 
    <div className="flex w-full">
        {showUserForm && ( 
        <div id='userform' className='text-left w-full'>
          <button type="submit" onClick={PrevFrom} className="inline-flex underline mt-4 p-2 hover:text-blue-800"><IoArrowBackCircleSharp size={32}/>Back</button>
        <div className='text-center justify-center flex'>
          <img className='' src={logo} alt="" />
          { showUserError0 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Please Add Atleast One Admin!</h1>
            </div>
          )}
        { showUserError1 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Please Add Atleast One Manager!</h1>
            </div>
          )}
        { showUserError2 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Please Add Atleast One Owner!</h1>
            </div>
          )}
        { showUserError3 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError31 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Please Enter Name!</h1>
            </div>
          )}
        { showUserError32 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Please Enter email!</h1>
            </div>
          )}
        { showUserError33 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError34 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError35 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError36 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError37 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError38 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError39 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 2: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError31a && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Please Enter Name!</h1>
            </div>
          )}
        { showUserError32b && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Please Enter email!</h1>
            </div>
          )}
        { showUserError33c && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError34d && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError35e && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError36f && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError37g && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError38h && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError39i && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Admin 3: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}


        { showUserError41 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Please Enter Name!</h1>
            </div>
          )}
        { showUserError42 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Please Enter email!</h1>
            </div>
          )}
        { showUserError43 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError44 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError45 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError46 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError47 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError48 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError49 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 2: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError4a && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Please Enter Name!</h1>
            </div>
          )}
        { showUserError4b && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Please Enter email!</h1>
            </div>
          )}
        { showUserError4c && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError4d && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError4e && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError4f && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError4g && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError4h && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError4i && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 3: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError411 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Please Enter Name!</h1>
            </div>
          )}
        { showUserError422 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Please Enter email!</h1>
            </div>
          )}
        { showUserError433 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError444 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError455 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError466 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError477 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError488 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError499 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 4: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError41a && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Please Enter Name!</h1>
            </div>
          )}
        { showUserError42b && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Please Enter email!</h1>
            </div>
          )}
        { showUserError43c && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError44d && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError45e && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError46f && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError47g && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError48h && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError49i && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 5: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
          { showUserError411a && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Please Enter Name!</h1>
            </div>
          )}
        { showUserError422b && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Please Enter email!</h1>
            </div>
          )}
        { showUserError433c && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError444d && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError455e && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError466f && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError477g && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError488h && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError499i && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager 6: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}


        { showUserError51 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Please Enter Name!</h1>
            </div>
          )}
        { showUserError52 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Please Enter email!</h1>
            </div>
          )}
        { showUserError53 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError54 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError55 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError56 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError57 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError58 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError59 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 2: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError51a && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Please Enter Name!</h1>
            </div>
          )}
        { showUserError52b && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Please Enter email!</h1>
            </div>
          )}
        { showUserError53c && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Please Enter Mobile Number!</h1>
            </div>
          )}
        { showUserError54d && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Please Enter Name and Mobile Number!</h1>
            </div>
          )}
        { showUserError55e && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Please Enter email and Mobile Number!</h1>
            </div>
          )}
        { showUserError56f && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Please Enter Name and email!</h1>
            </div>
          )}
        { showUserError57g && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError58h && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Enter Name and Mobile Number must be 10 digits!</h1>
            </div>
          )}
        { showUserError59i && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner 3: Enter email & Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError4 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Manager Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        { showUserError5 && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Owner Mobile Number Must Include 10 digits!</h1>
            </div>
          )}
        </div>

        <h1 className='mt-12 mb-12 text-3xl text-center font-semibold'>Add User Details</h1>        
        <hr />          
        <button className='text-black w-full hover:bg-gray-100 flex justify-center font-bold text-xl py-5' onClick={handleAddAdmin}>Add Admin(s): <IoIosArrowDown size={26}/></button><hr />
        {showAdminForm && ( 
        <form className='text-center pt-6 pb-12' action="submit">
        <div className='flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Admin 1: &nbsp;</h1>
            <input id='adminName' value={adminName} onChange={(e) => setAdminName(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Admin 1)'/>
            <input id='adminEmail' value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={admin1countryCode} onChange={(e) => setCountryCode1(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='adminPhone' value={adminPhone} onChange={(e) => setAdminPhone(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>
        
        <div className='mt-5 flex justify-center'>
          <h1 className='text-lg font-semibold mt-1'>Admin 2: &nbsp;</h1>
            <input id='adminName2' value={adminName2} onChange={(e) => setAdminName2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Admin 2)'/>
            <input id='adminEmail2' value={adminEmail2} onChange={(e) => setAdminEmail2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={admin2countryCode} onChange={(e) => setCountryCode2(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='adminPhone2' value={adminPhone2} onChange={(e) => setAdminPhone2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>

        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Admin 3: &nbsp;</h1>
            <input id='adminName3' value={adminName3} onChange={(e) => setAdminName3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Admin 3)'/>
            <input id='adminEmail3' value={adminEmail3} onChange={(e) => setAdminEmail3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={admin3countryCode} onChange={(e) => setCountryCode3(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='adminPhone3' value={adminPhone3} onChange={(e) => setAdminPhone3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>
        </form>
        )}


        <button className='text-black w-full hover:bg-gray-100 flex justify-center font-bold text-xl py-5' onClick={handleAddManager}>Add Manager(s): <IoIosArrowDown size={26}/></button><hr />
        {showManagerForm &&(
        <form className='text-center pt-6 pb-12' action="submit">
          <div className='flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Manager 1: &nbsp;</h1>
            <input id='managerName' value={managerName} onChange={(e) => setManagerName(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 1)'/>
            <input id='managerEmail' value={managerEmail} onChange={(e) => setManagerEmail(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={manager1countryCode} onChange={(e) => setCountryCode4(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone' value={managerPhone} onChange={(e) => setManagerPhone(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>

        </div>
 
        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Manager 2: &nbsp;</h1>
            <input id='managerName2' value={managerName2} onChange={(e) => setManagerName2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 2)'/>
            <input id='managerEmail2' value={managerEmail2} onChange={(e) => setManagerEmail2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={manager2countryCode} onChange={(e) => setCountryCode5(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone2' value={managerPhone2} onChange={(e) => setManagerPhone2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>


        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Manager 3: &nbsp;</h1>
            <input id='managerName3' value={managerName3} onChange={(e) => setManagerName3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 3)'/>
            <input id='managerEmail3' value={managerEmail3} onChange={(e) => setManagerEmail3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={manager3countryCode} onChange={(e) => setCountryCode6(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone3' value={managerPhone3} onChange={(e) => setManagerPhone3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>

        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Manager 4: &nbsp;</h1>
            <input id='managerName4' value={managerName4} onChange={(e) => setManagerName4(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 4)'/>
            <input id='managerEmail4' value={managerEmail4} onChange={(e) => setManagerEmail4(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={manager4countryCode} onChange={(e) => setCountryCode7(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone4' value={managerPhone4} onChange={(e) => setManagerPhone4(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>

        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Manager 5: &nbsp;</h1>
            <input id='managerName5' value={managerName5} onChange={(e) => setManagerName5(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 5)'/>
            <input id='managerEmail5' value={managerEmail5} onChange={(e) => setManagerEmail5(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={manager5countryCode} onChange={(e) => setCountryCode8(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone5' value={managerPhone5} onChange={(e) => setManagerPhone5(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>

          <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Manager 6: &nbsp;</h1>
            <input id='managerName6' value={managerName6} onChange={(e) => setManagerName6(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 6)'/>
            <input id='managerEmail6' value={managerEmail6} onChange={(e) => setManagerEmail6(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={manager6countryCode} onChange={(e) => setCountryCode9(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone6' value={managerPhone6} onChange={(e) => setManagerPhone6(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>
        </form>
        )}

        <button className='text-black w-full hover:bg-gray-100 flex justify-center font-bold text-xl py-5' onClick={handleAddOwner}>Add Owner(s): <IoIosArrowDown size={26}/></button><hr />
        {showOwnerForm && (
        <form className='text-center pt-6 pb-12' action="submit">
          <div className='flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Owner 1: &nbsp;</h1>
            <input id='ownerName' value={ownerName} onChange={(e) => setOwnerName(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Owner 1)'/>
            <input id='ownerEmail' value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={owner1countryCode} onChange={(e) => setCountryCode10(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='ownerPhone' value={ownerPhone} onChange={(e) => setOwnerPhone(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>

        </div>

        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Owner 2: &nbsp;</h1>
            <input id='ownerName2' value={ownerName2} onChange={(e) => setOwnerName2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Owner 2)'/>
            <input id='ownerEmail2' value={ownerEmail2} onChange={(e) => setOwnerEmail2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={owner2countryCode} onChange={(e) => setCountryCode11(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='ownerPhone2' value={ownerPhone2} onChange={(e) => setOwnerPhone2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>

        <div className='mt-5 flex justify-center'>
            <h1 className='text-lg font-semibold mt-1'>Owner 3: &nbsp;</h1>
            <input id='ownerName3' value={ownerName3} onChange={(e) => setOwnerName3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Owner 3)'/>
            <input id='ownerEmail3' value={ownerEmail3} onChange={(e) => setOwnerEmail3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <select name="countryCode" className='border border-gray-500 w-20 p-2 mr-1 rounded' value={owner3countryCode} onChange={(e) => setCountryCode12(e.target.value)}>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='ownerPhone3' value={ownerPhone3} onChange={(e) => setOwnerPhone3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number' minLength="10" maxLength="10"/>
        </div>
        </form>
        )}
        
        <div className='text-center mt-16 mb-6'>
        {loading ? (
                <img id='Licon-bridgeform' className='absolute w-24' src={loadingIcon} alt="Loading" />
              ) : (
          <button type="submit" onClick={submitForm} className="bg-blue-600 px-5 py-2 text-gray-100 mx-2 rounded-sm hover:bg-indigo-900">Submit</button>
          )}
        <button onClick={onCancel} className="bg-black px-5 py-2 text-gray-100 rounded-sm mx-2 hover:bg-red-800">Cancel</button>
        </div>
      </div>
      )}


    {showBridgeForm && ( 
      <div className="w-full px-2 bg-white rounded-xl">
            <button className='flex underline mt-4 hover:text-blue-800' onClick={backHome}><IoArrowBackCircleSharp size={32}/>Home</button>
            <div className='w-full flex text-center justify-center items-center'>
            <img className='mb-8' src={logo} alt="" />
            </div>

        <form><hr />
          <h1 className='text-center text-3xl mt-8 mb-8 font-semibold'>Enter Bridge Details</h1><hr />
          { showBridgeDetailsError && ( 
            <div className='absolute text-center w-full flex justify-center items-center'>
              <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={22}/>Please Fill all the Fields Correctly!</h1>
            </div>
          )}
          <div className="flex bg-gray-100 mt-16 mx-12 shadow-2xl p-6 pt-12 pb-12">
            <div className='w-full mx-5'>
              <div className="mb-6">
            <label htmlFor="country" className="block text-gray-700">Country:</label>
            <select id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="border border-gray-300 p-2 w-full rounded" >
                <option value="" disabled>Select Country</option>
                {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
              <label htmlFor="coordinates" className="block text-gray-700">Bridge Coordinates:</label>
              <input type="text" id="coordinates" placeholder='Enter Coordinates' name="coordinates" value={coordinates} onChange={(e) => setCoordinates(e.target.value)} className="border border-gray-300 p-2 w-full rounded"/>
            </div>
          <div className="mb-6">
            <label htmlFor="nobridgespan" className="block text-gray-700">Number of Bridge Spans:</label>
            <select id="nobridgespan" name="nobridgespan" onChange={(e) => setnobridgespan(e.target.value)} className="border border-gray-300 p-2 w-full rounded">
              {[...Array(50).keys()].map((span) => (<option key={span + 1} value={span + 1}>{span + 1}</option>))}
            </select>
          </div>
        </div>
            <div className='w-full mx-5'>
            <div className="mb-6">
            <label htmlFor="state" className="block text-gray-700">State:</label>
            <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} className="border border-gray-300 p-2 w-full rounded">
                <option value="" disabled>Select State</option>
                {statesByCountry[country]?.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor='bridgeName' className="block text-gray-700">Bridge Location:</label>
            <input type="text" id="location" placeholder='Enter Location' name="location" value={location} onChange={(e) => setlocation(e.target.value)} className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="noofgirders" className="block text-gray-700">Number of Girders:</label>
            <select id="noofgirders" name="noofgirders" onChange={(e) => setnoofgirders(e.target.value)} className="border border-gray-300 p-2 w-full rounded">
              {[...Array(20).keys()].map((girder) => (<option key={girder + 1} value={girder + 1}>{girder + 1}</option>))}
            </select>
          </div>
        </div>
        <div className='w-full mx-5'>
            <div className="mb-6">
              <label htmlFor="division" className="block text-gray-700">Division:</label>
              <input type="text" id="division" placeholder='Enter Division' name="division" value={division} onChange={(e) => setDivision(e.target.value)} className="border border-gray-300 p-2 w-full rounded" />
            </div>
            <div className="mb-6">
              <label htmlFor='bridgeName' className="block text-gray-700">Bridge Name:</label>
              <input type="text" id="name" placeholder='Enter Name' name="name" value={bridgeName} onChange={(e) => setBridgeName(e.target.value)} className="border border-gray-300 p-2 w-full rounded" />
            </div>
        </div>
      </div>
          <div className='flex align-center justify-center text-center mt-12 mb-12'>
            <button type="submit" onClick={UserForm} className="bg-blue-600 px-6 mx-2 py-2 text-gray-100 rounded-sm hover:bg-blue-900">Next</button>
            <button onClick={Cancel} className="bg-black px-5 py-2 text-gray-100 rounded-sm hover:bg-white hover:text-black border border-black ml-2">Cancel</button>
          </div>
          
        </form>
      </div>
      )}
      </div>

    </>
  );
};


export default BridgeForm;
