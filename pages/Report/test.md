


{/* <script src="https://www.cognitoforms.com/f/seamless.js" data-key="R0z_VBBdrku0YuN-npiDxA" data-form="2"></script> */}
                  {/* <form id="reportForm" style={formStyle}>
                    <h2>Report Incident</h2>
                    <label htmlFor="fullName" style={labelStyle}>Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required style={inputStyle} />

                    <label htmlFor="role" style={labelStyle}>I am the:</label>
                    <select id="role" name="role" required style={inputStyle}>
                      <option value="victim">Victim</option>
                      <option value="perpetrator">Perpetrator</option>
                      <option value="community_member">Community Member</option>
                      <option value="other">Other</option>
                    </select>

                    <label htmlFor="address" style={labelStyle}>Address:</label>
                    <input type="text" id="address" name="address" required style={inputStyle} />

                    <label htmlFor="communication" style={labelStyle}>Preferred method of communication:</label>
                    <select
                      id="communication"
                      name="communication"
                      required
                      onChange={(e) => showContactInput(e.target.value)}
                      style={inputStyle}
                    >
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                    </select>

                    {communication === 'phone' ? (
                      <div style={labelStyle}>
                        <label htmlFor="phoneNumber" style={labelStyle}>Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" style={inputStyle} />
                      </div>
                    ) : (
                      <div style={labelStyle}>
                        <label htmlFor="email" style={labelStyle}>Email:</label>
                        <input type="email" id="email" name="email" style={inputStyle} />
                      </div>
                    )}

                    <label htmlFor="incidentType" style={labelStyle}>Incident Type:</label>
                    <select id="incidentType" name="incidentType" required style={inputStyle}>
                      <option value="rape" title="Non-consensual penetration of the vagina, anus or mouth with a penis or other body part.">
                        Rape
                      </option>
                      <option value="sexual_assault" title="Non-consensual sexual contact that does not result in or include penetration.">
                        Sexual Assault
                      </option>
                      <option value="physical_assault" title="An act of physical violence that is not sexual in nature.">
                        Physical Assault
                      </option>
                      <option value="forced_marriage" title="The marriage of an individual against her or his will.">
                        Forced Marriage
                      </option>
                      <option value="denial_of_resources" title="Denial of rightful access to economic resources/assets or livelihood opportunities, education, health or other social services.">
                        Denial of Resources
                      </option>
                      <option value="psychological_abuse" title="Infliction of mental or emotional pain or injury.">
                        Psychological / Emotional Abuse
                      </option>
                    </select>

                    <label htmlFor="contactTime" style={labelStyle}>When can we contact you:</label>
                    <select
                      id="contactTime"
                      name="contactTime"
                      required
                      onChange={(e) => showContactTimeInput(e.target.value)}
                      style={inputStyle}
                    >
                      <option value="anytime">Anytime</option>
                      <option value="specific_time">Only at a date and time I suggest</option>
                    </select>

                    {contactTime === 'specific_time' && (
                      <div style={labelStyle}>
                        <label htmlFor="contactDate" style={labelStyle}>Date:</label>
                        <input type="date" id="contactDate" name="contactDate" style={inputStyle} />
                        <label htmlFor="contactHour" style={labelStyle}>Time:</label>
                        <input type="time" id="contactHour" name="contactHour" style={inputStyle} />
                      </div>
                    )}

                    <label htmlFor="comment" style={labelStyle}>Comment:</label>
                    <textarea id="comment" name="comment" style={inputStyle}></textarea>
                    <label htmlFor="media" style={labelStyle}>Attach media:</label>
                    <input type="file" id="media" name="media" style={inputStyle} />

                    <button type="submit" style={buttonStyle} onMouseOver={(e) => (e.currentTarget.style.background = '#0056b3')} onMouseOut={(e) => (e.currentTarget.style.background = '#007bff')}>
                      Submit Report
                    </button>
                  </form> */}