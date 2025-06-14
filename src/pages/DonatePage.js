import React from 'react';

/**
 * DonatePage Component
 * Displays information about supporting the project through game purchases and donations.
 * Includes embedded content from itch.io and links to external sites.
 */
function DonatePage() {
    return (
        <div className="donate-page-container" style={{
            padding: '20px',
            maxWidth: '800px',
            margin: 'auto',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <h2 style={{
                color: '#333',
                fontSize: '2em',
                marginBottom: '20px'
            }}>😊Support by Buying Digital Products! (Pay what you want)🙏</h2>
            <p style={{
                color: '#666',
                fontSize: '1.1em',
                marginBottom: '30px'
            }}>Your support helps me keep BitWattr developing more cool projects.</p>

            <div className="game-showcase" style={{
                marginBottom: '40px',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
                <h3 style={{
                    color: '#444',
                    fontSize: '1.5em',
                    marginBottom: '15px'
                }}>Featured Products</h3>
                {/* Embed for the featured game Assault Auto from itch.io */}
                <div className="game-embed" dangerouslySetInnerHTML={{
                    __html: `<iframe frameborder="0" src="https://itch.io/embed/2801178?border_width=0&amp;bg_color=beb2cc&amp;fg_color=222222&amp;link_color=4a25a3&amp;border_color=a57ae3" width="550" height="165" title="Assault Auto by Project_Unplayed on itch.io">
                                <a href="https://project-unplayed.itch.io/assault-auto-demo">Assault Auto by Project_Unplayed</a>
                             </iframe>`
                }} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px' // Add margin between embeds
                }}></div>

                {/* Embed for Car Reinforcement Learning (live demo) from itch.io */}
                <div className="game-embed" dangerouslySetInnerHTML={{
                    __html: `<iframe frameborder="0" src="https://itch.io/embed/2688268?bg_color=b0dab4&amp;link_color=41d057" width="552" height="167" title="Car Reinforcement Learning (live demo) by Project_Unplayed on itch.io">
                                <a href="https://project-unplayed.itch.io/car-reinforcement-learning-demo">Car Reinforcement Learning (live demo) by Project_Unplayed</a>
                             </iframe>`
                }} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px' // Add margin between embeds
                }}></div>

                {/* Embed for Exchange Ventures: Profit Pursuit from itch.io */}
                <div className="game-embed" dangerouslySetInnerHTML={{
                    __html: `<iframe frameborder="0" src="https://itch.io/embed/2835736?bg_color=8ea426&amp;link_color=d6c903" width="552" height="167" title="Exchange Ventures: Profit Pursuit by Project_Unplayed on itch.io">
                                <a href="https://project-unplayed.itch.io/exchange-ventures-profit-pursuit">Exchange Ventures: Profit Pursuit by Project_Unplayed</a>
                             </iframe>`
                }} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}></div>
            </div>

            <div className="other-games-section" style={{
                marginBottom: '40px',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
                <p style={{
                    color: '#666',
                    fontSize: '1.1em',
                    marginBottom: '20px'
                }}>Support by Buying other creations?</p>
                {/* Link to the developer's itch.io profile */}
                <a
                    href="https://project-unplayed.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="colorful-button"
                    style={{
                        background: 'linear-gradient(45deg, #f06, #09f)',
                        color: 'white',
                        padding: '12px 25px', // Increased padding for better touch target
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1em',
                        display: 'inline-block',
                        marginTop: '15px',
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                    }}
                    aria-label="See more games by BitWattr (Project_Unplayed on itch.io)"
                >
                    See Products by BitWattr (Project_Unplayed on itch.io)
                </a>
            </div>

            {/* Button to navigate back to the previous page */}
            <button
                onClick={() => window.history.back()}
                className="back-to-upload-button"
                style={{
                    backgroundColor: '#6c757d',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1em',
                    transition: 'background-color 0.2s ease-in-out',
                    marginTop: '30px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
            >
                Back
            </button>
        </div>
    );
}

export default DonatePage;
