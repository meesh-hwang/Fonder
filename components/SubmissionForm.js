import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import uploadIcon from '../assets/img/upload-icon.svg';

import '../css/reset.css'
import '../css/main.css'

const SubmissionForm = () => {

    // MEDIA QUERIES
    const isXMobile = useMediaQuery({
        query: '(min-width: 280px) and (max-width: 575px)'
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width: 767px)'
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 991px)'
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1199px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    const [upload, fileUploaded] = useState(false);
    const [submit, didSubmit] = useState(false);

function handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData(e.target)
    var cuisine = formData.get('cuisine');
    var name = formData.get("name");
    var tags = formData.get('tags');
    var img_url = document.getElementById("file");
    img_url = img_url.files[0].name;
    var short_desc = formData.get('desc');
    
    // var dishTags = formData.get('tags').split(', ');
    // setTags(dishTags)
    // console.log(cuisine +name+tags+ img_url + short_desc);


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "name": name,
    "cuisine": cuisine,
    "tags": tags,
    "img_url": img_url,
    "short_desc": short_desc
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://fonder.edwardlin.ca/api/v1/meals/create.php", requestOptions)
    .then(response => response.text())
    .then(result => {
        alert("Meal Uploaded");
        location.reload();
    })
    .catch(error => console.log('error', error));
  }

    return (
        <div style={{ flexBasis: '50%' }}>
            {isXMobile &&
                <section className='submission-form'>
                    <div className='submission-heading'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className='entry-form' action='/submit.php' method='post'>

                        <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select name="cuisine" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                              <textarea required name="name" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required name="desc" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required name="tags" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" id="file" name="file" onInput={()=>fileUploaded(true)} />
                                <p>{upload ? "File Uploaded" : "Click to Upload"}</p>
                            </label>
                        </div>

                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <input type="submit" className='submit-btn'/>

                    </form>
                </section>
            }

            {isMobile &&
                <section className='submission-form mobile'>
                    <div className='submission-heading mobile'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className='entry-form' method='post'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select name="cuisine" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required name="name" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required name="desc" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required name="tags" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" id="file" name="file" onInput={()=>fileUploaded(true)} />
                                <p>{upload ? "File Uploaded" : "Click to Upload"}</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <input type="submit" className='submit-btn'/>

                    </form>
                </section>
            }
            {isTablet &&
                <section className='submission-form tablet'>
                    <div className='submission-heading tablet'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className='entry-form' method='post'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select name="cuisine" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required name="name" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required name="desc" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required name="tags" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                            <input required type="file" id="file" name="file" onInput={()=>fileUploaded(true)} />
                                <p>{upload ? "File Uploaded" : "Click to Upload"}</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> 
                            <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <input type="submit" className='submit-btn' />

                    </form>
                </section>
            }
            {isLaptop &&
                <section className='submission-form laptop'>
                    <div className='submission-heading laptop'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className='entry-form' method='post'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select name="cuisine" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required name="name" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required name="description" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required name="tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" id="file" name="file" onInput={()=>fileUploaded(true)} />
                                <p>{upload ? "File Uploaded" : "Click to Upload"}</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <input type="submit" className='submit-btn'/>

                    </form>
                </section>
            }
            {isDesktop &&
                <section className='submission-form desktop'>
                    <div className='submission-heading'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className='entry-form' method='post'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select name="cuisine" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required name="name" id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required name="desc" id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required name="tags" id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                            <input required type="file" id="file" name="file" onInput={()=>fileUploaded(true)} />
                                <p>{upload ? "File Uploaded" : "Click to Upload"}</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input required type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <input type="submit" className='submit-btn'/>

                    </form>
                </section>
            }
        </div>
    )
}
export default SubmissionForm
