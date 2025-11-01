import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { Fragment, useState } from 'react';
import axios from 'axios';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import telephone from "../../../assests/images/telephone.png";
import carIcon from "../../../assests/images/car-icon.png";
import appIcon from "../../../assests/images/app-icon.png";
import rupee from "../../../assests/images/rupee.png";
import business from "../../../assests/images/businessman.png";
import operator from "../../../assests/images/operator.png";

const weGetOptions = [
    {
        icon: telephone,
        text: "Instant Call Back",
    },
    {
        icon: carIcon,
        text: "Book a Free Site Tour",
    },
    {
        icon: rupee,
        text: "Verified Price Quote",
    },
    {
        icon: business,
        text: "Expert Guidance",
    },
    {
        icon: operator,
        text: "Complete Assistance with Home Loans & Docs",
    },
    {
        icon: appIcon,
        text: "Get Brochure & Prices Instantly",
    }
]

const EnquireForm = ({ title, setOpen, button, formId, showSide }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
            setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobileNumber: value });
        if (errors.mobileNumber) {
            setErrors({ ...errors, mobileNumber: "" });
        }
    };

    const validate = () => {
        const newErrors = {};

        // Name required
        if (!formData.name.trim()) newErrors.name = "Please Fill Out this Field";

        // Email optional but must be valid if filled
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email";

        // Mobile number validation using react-phone-number-input helpers
        if (!formData.mobileNumber) {
            newErrors.mobileNumber = "Please Fill Out this Field";
        } else if (!isPossiblePhoneNumber(formData.mobileNumber)) {
            newErrors.mobileNumber = "Phone number format looks incorrect";
        } else if (!isValidPhoneNumber(formData.mobileNumber)) {
            newErrors.mobileNumber = "Invalid phone number for selected country";
        }
        if (!formData.terms) newErrors.terms = "You must accept the terms";

        return newErrors;
    };

    const [formVisible, setFormVisible] = useState(true);
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);
    const [priceRange, setPriceRange] = useState("1 Cr to 1.5 Cr");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoading(true);

            axios({
                method: "post",
                url: "https://anantaaspire.co/api/enquire-us-api.php",
                data: JSON.stringify({
                    name: formData.name,
                    mobileNumber: formData.mobileNumber,
                    email: formData.email,
                    price: priceRange,
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    setLoading(false);

                    setFormVisible(false);

                    if(formId === "request") {
                        setFormSuccess(
                            <>
                                <span className='thanku-txt'>Thank You!</span>
                                <div className='flex flex-col success_msg'>
                                    <span>We’ve received your enquiry for Ananta Aspire. Our team will contact you soon to provide all the details you need.</span>
                                </div>
                            </>
                        );
                    } else if(formId === "sideFixed") {
                        setFormSuccess(
                            <>
                                <span className='thanku-txt'>Thank You!</span>
                                <div className='flex flex-col success_msg'>
                                    <span>We appreciate your time. Our team will connect with you shortly to help you explore the world of premium living at Ananta Aspire — where luxury, comfort, and convenience come together seamlessly.</span>
                                </div>
                            </>
                        );
                    } else if(formId === "schedule") {
                        setFormSuccess(
                            <>
                                <span className='thanku-txt'>Thank You!</span>
                                <div className='flex flex-col success_msg'>
                                    <span>Our team will contact you shortly to confirm your site tour at Ananta Aspire and assist with all the details.</span>
                                </div>
                            </>
                        );
                    } else if(formId === "contact") {
                        setFormSuccess(
                            <>
                                <span className='thanku-txt'>Thank You!</span>
                                <div className='flex flex-col success_msg'>
                                    <span>Our representative will contact you shortly with complete project details and assist you through the next steps.</span>
                                </div>
                            </>
                        );
                    } else if(formId === "explore") {
                        setFormSuccess(
                            <>
                                <span className='thanku-txt'>Thank You!</span>
                                <div className='flex flex-col success_msg'>
                                    <span>We've received your enquiry for Ananta Aspire. Our team will contact you soon to provide all the details you need.</span>
                                </div>
                            </>
                        );
                    } else {
                        setFormSuccess(
                            <>
                                <span className='thanku-txt'>THANK YOU </span>
                                <div className='flex flex-col success_msg'>
                                    <span> For Trusting Us with Your Home Search!!</span> 
                                    <span>We'll Reach Out Soon With All the Details.</span> 
                                </div>
                            </>
                        );
                    }
                    
                    // if( setOpen){

                    //     setFormVisible(false);
                    //   }
                    resetForm();
                    setTimeout(() => {
                        setFormSuccess('');
                        setFormVisible(true);
                        if(setOpen){
                            setOpen(false);
                        }
                    }, 10000);

                } else {
                    setLoading(false);
                    setFormError("Some error occured");
                    resetForm();
                    setTimeout(() => {
                        setFormError('');
                    }, 10000);
                }
            })
            .catch(function (response) {
                //handle error
                setLoading(false);
                console.log(response);
                setFormError(response?.message ? response.message : "Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 10000);
            });
        }
    }

    const resetForm = () => {
        setFormData({ name: "", email: "", mobileNumber: "", terms: false });
        setPriceRange('1 Cr to 1.5 Cr');
    }
    console.log(formId);

    return (
        <form className="enquire-form" onSubmit={handleSubmit}>
             <div className={`form-section text-left ${formSuccess ? 'form-success' : ''}`}>
                
                <div className='gap-2' id='enquiry-form'>
                    
                    <h5 className="text-2xl font-semibold capitalize mb-2.5">{title}</h5>

                    {formError && (
                        <p className="form_error text-center">{formError}</p>
                    )}

                    {formSuccess && (
                        <div className="success-wrapper text-green-700 text-[15px] gap-0 flex flex-col items-center justify-center">
                            {/* <div className="text-white bg-primary-brown check"> <FontAwesomeIcon icon={faCheck} /></div> */}
                            <span className='flex flex-col w-full gap-0 flex flex-col success-text'>{formSuccess}</span>
                        </div>
                    )}

                    {formVisible && 
                        <Fragment>

                            <div className='form-row-flex'>
                                <div className="py-2 form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? "invalid" : ""}
                                        placeholder='Name*'
                                    />
                                    <p className={`text-red-400 error text-sm ${errors.name && "visible"}`}>{errors.name ? errors.name : "Please Fill Out this Field"}</p>
                                </div>
                                <div className="py-2 form-row">
                                    <input
                                        type="email"
                                        placeholder="Email (Optional)"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? "invalid" : ""}
                                    />
                                    <p className={`text-red-400 error text-sm ${errors.email && "visible"}`}>{errors.email ? errors.email : "Please Fill Out this Field"}</p>
                                </div>
                            </div>
                            
                            <div className="py-2 form-row">
                                <PhoneInput
                                    type="tel"
                                    name="mobile-number"
                                    placeholder="Mobile Number*"
                                    value={formData.mobileNumber}
                                    onChange={handlePhoneChange}
                                    className={errors.mobileNumber ? "phone-input-error" : ""}
                                    country="IN"
                                    defaultCountry="IN"
                                    national="true"
                                    international={false}
                                />
                                <p className={`text-red-400 error text-sm ${errors.mobileNumber && "visible"}`}>{errors.mobileNumber ? errors.mobileNumber : "Please Fill Out this Field"}</p>
                            </div>

                            <div className="py-2 form-row">
                                <p className='form_label'>Select Budget*</p>

                                <ToggleButtonGroup name={`price_range_${formId}`} className='price_range_group' type="radio" value={priceRange} onChange={(val) => setPriceRange(val)}>
                                    <ToggleButton id={`${formId+"_1"}`} value={"1 Cr to 1.5 Cr"} className={`${priceRange === "1 Cr to 1.5 Cr" && 'active'}`}>
                                        1 Cr to 1.5 Cr
                                    </ToggleButton>
                                    <ToggleButton id={`${formId+"_2"}`} value={"1.5 Cr to 2 Cr"}>
                                        1.5 Cr to 2 Cr
                                    </ToggleButton>
                                    <ToggleButton id={`${formId+"_4"}`} value={"2 Cr Onwards"}>
                                        2 Cr Onwards
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            
                            <p className={`checkbox_div flex items-center text-[10px] mt-5 ${formData.terms ? 'font-semibold' : 'font-extralight  text-gray-400'}`}>

                                <label className="custom-checkbox">
                                    <input 
                                        type='checkbox' 
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        className={errors.terms ? "checkbox-error checkbox" : "checkbox"} 
                                    /> 
                                    <span className={errors.terms ? "checkbox-error checkmark" : "checkmark"}></span>
                                </label>
                                <span>I agree to be contacted by 'Ananta Aspire' and agents via WhatsApp, SMS, phone, email etc.</span>

                                
                            </p>
                            <p className={`text-red-400 error text-sm ${errors.terms && "visible"}`}>{errors.terms ? errors.terms : "You must accept the terms"}</p>

                            <div className="text-center flex items-center gap-5 justify-end">
                                <input type="submit" value={loading ? "Processing..." : button ? button : 'Download Now'} disabled={loading} className={`submit_btn cursor-pointer`} />
                            
                            </div>
                        </Fragment>
                        }
                    
                </div>
                
                
                {showSide && showSide === true &&
                        <div className="py-2 form-row we_get_row">
                            <p className='form_label'>What You Get</p>
                            <div className='we_get_div_grid'>
                                {weGetOptions.map((item,i) => (
                                    <div className='we_get_div_item' key={i}>
                                        <img src={item.icon} alt={item.text} className='we_get_icon' />
                                        <p className='we_get_text'>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
            </div>
        </form>
    )
}

export default EnquireForm