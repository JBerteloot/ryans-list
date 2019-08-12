import React, {useEffect} from "react"
import {add, selectCategory} from "../actions/actions"
import {useSelector} from 'react-redux'
import Redirect from 'react-router-dom'

export default props => {
  const newPost = useSelector(appState => appState.newPost)
  const categories = useSelector(appState => appState.categories)
  // var subcategories = []
  // if (categories.length > 0) {
  //   subcategories = categories.find(categ => 
  //     {console.log(categ.id)
  //       return categ.id == (newPost.category_id) ? newPost.category_id:1}).sub}

  function post() {
    add(newPost)
    alert("Post has been added")
    props.history.push('/')
  }

  // function selectCat() {
  //   selectCategory(id)
  // }

  // useEffect(() => {
  //   if (categories.length > 0) {
  //   subcategories = categories.find(categ => 
  //     {console.log(categ.id)
  //       return categ.id == (newPost.category_id) ? newPost.category_id:1}).sub}} 
  // )

  return (
    <div className="createpostpage">
      <header>
        <p>las vegas</p>
        <aside id="leftnewpost">
          <p>[ log in ]</p>
          <p>[ create account ]</p>
        </aside>
      </header>
      <main>
        <form className="newpost">
          <section id="one">
            <div>
              <select onChange={e => newPost.category_id = e.target.value}>
                {categories.map((categ, i) => (
                  <option value={categ.id}>{categ.name}</option>
                ))}
              </select>
            </div>
            {/* <div>
              <select>
              {subcategories.map((categ, i) => (
                  <option value={categ.id}>{categ.name}</option>
                ))}
              </select>
            </div> */}

            <span>
              <label for="title">posting title</label>
              <input type="text" id="title" onChange={e => newPost.title = e.target.value} />
            </span>
            <span>
              <label for="location">city or neighborhood</label>
              <input type="text" id="location" onChange={e => newPost.location = e.target.value} />
            </span>
            <span>
              <label for="pc" onChange={e => newPost.location = e.target.value}>postal code</label>
              <input type="text" id="pc" />
            </span>
          </section>

          <section id="descrip">
            <label for="descrip">description</label>
            <input type="textarea" id="descrip" />
          </section>

          <section id="contactinfo">
            <span>
              <span>
                <label for="email">email</label>
                <input type="email" />
              </span>
              <span id="radios">
                <p>mail privacy options</p>
                <span>
                  <input type="radio" />
                  <label>CL mail relay (recommended)</label>
                </span>
                <span>
                  <input type="radio" />
                  <label>no replies to this email</label>
                </span>
              </span>
            </span>
            <span id="phone-text">
              <span id="checkboxes">
                <p>phone/text</p>
                <span>
                  <input type="checkbox" />
                  <label>show my phone number</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>phone calls OK</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>text/sms OK</label>
                </span>
              </span>
              <span id="fields">
                <span>
                  <label for="phone">phone number</label>
                  <input type="tel" id="phone" />
                </span>
                <span>
                  <label for="ext">extension</label>
                  <input type="tel" id="ext" />
                </span>
                <span>
                  <label for="name">contact name</label>
                  <input type="text" id="name" />
                </span>
              </span>
            </span>
          </section>
          <section id="location">
            <span>
              <input type="checkbox" />
              <label>show my address</label>
            </span>
            <span id="locfields">
              <span>
                <label for="street">street</label>
                <input type="text" />
              </span>
              <span>
                <label for="xst">cross street</label>
                <input type="text" />
              </span>
              <span>
                <label for="addcity">city</label>
                <input type="text" />
              </span>
            </span>
          </section>
          <section id="lastline">
            <input type="checkbox" />
            <label>ok for others to contact you about other services, products or commercial interests</label>
          </section>
          <button type="button" onClick={post} >Continue</button>
        </form>
      </main>
    </div>
  )
}