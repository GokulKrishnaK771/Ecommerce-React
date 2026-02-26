import { Link } from 'react-router'
import './checkout-header.css'

export default function CheckoutHeader() {
    return (
        <>
            <div class="checkout-header">
                <div class="header-content">
                    <div class="checkout-header-left-section">
                        <Link to="/">
                            <img class="logo" src="images/logo.png" />
                            <img class="mobile-logo" src="images/mobile-logo.png" />
                        </Link>
                    </div>

                    <div class="checkout-header-middle-section">
                        Checkout (<Link class="return-to-home-link"
                            to="/">3 items</Link>)
                    </div>

                    <div class="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    )
}