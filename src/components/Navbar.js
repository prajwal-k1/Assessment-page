import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="navigation-links">
                    <ul>
                        <li>Magpie</li>
                        <li>Stake</li>
                        <li>Claim</li>
                        <li>Lock</li>
                        <li>Docs</li>
                        <li>Governance</li>
                        <li>Bribe</li>
                        <li>Referral</li>
                        <li><button>Audited</button></li>
                    </ul>
                </div>
                <div className="account-top-right">
                    <ul>
                        <li>EN</li>
                        <li><button>Account num</button></li>
                        <li>Logo</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
