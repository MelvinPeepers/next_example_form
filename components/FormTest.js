import React from 'react'

const NetlifyFormTastic = () => {
    return (
        <div>
            <h1>Netlify Form Testing</h1>            
            <form method="POST" target="_self" id="Contact_General" name="Contact_General" data-netlify="true" netlify-honeypot="bot-field" action="/success"> 

                <input type="hidden" name="form-name" value="formtest"/>
                
                <p>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name="name" required />
                </p>

                <p>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" required />
                </p>

                <p>
                    <label htmlFor="message">Message</label><br />
                    <textarea id="message" name="message" required />
                </p>

                <p>
                    <input type="submit" value="Submit message" />
                </p>

            </form>
        </div>
    )


};

export default NetlifyFormTastic;
