import React from 'react'

export default function ReferalSection() {
    return (
        <section>
            <div className='text-section'>
                <h3>Refer Friends.</h3>
                <h3>Earn $MGP together.</h3>
                <p>Earn upto 15% of the $MGP that your friends earn on Magpie.</p>
                <p>View referral rules {'>'}</p>
            </div>
            <div className='referral-card'>
                <div className='tier-boost-buttons'>
                    <button>Tier 1</button><button>Boost 5%</button>
                    <p>Upgrade to higher tier {'>'}</p>
                </div>
                <div className='two-sub-sections'>
                    <div>
                        <h3>5%</h3>
                        <p>You Receive</p>
                    </div>
                    <div>
                        <h3>0%</h3>
                        <p>Friends Receive</p>
                    </div>
                </div>
                <div className='referral-link'>
                    <h4>Referral Link</h4>
                    <p>http://accounts/myAccount</p>
                </div>
                <div className='socials'>
                    <h4>Share on</h4>
                    <ul>
                        <li>Twitter Logo</li>
                        <li>Telegram Logo</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
