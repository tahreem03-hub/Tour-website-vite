/*import React from 'react'

const MenuItems = () => {
    const menuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'nav-links',
            icon: 'fa-solid fa-house'
        },

                {
            title: 'About',
            url: '/about',
            cName: 'nav-links',
            icon: 'fa-solid fa-circle-user'
        },

                {
            title: 'Service',
            url: '/service',
            cName: 'nav-links',
            icon: 'fa-solid fa-briefcase'
        },

                 {
            title: 'Contact',
            url: '/contact',
            cName: 'nav-links',
            icon: 'fa-solid address-book'
        },

                {
            title: 'Sign Up',
            url: '/signup',
            cName: 'nav-links-mobile',
        }
    ]
    return (
        <div>

        </div>
    )
}

export default MenuItems*/

// MenuItems.jsx
export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'nav-links',
        icon: 'fa-solid fa-house'
    },
    {
        title: 'About',
        url: '/about',
        cName: 'nav-links',
        icon: 'fa-solid fa-circle-user'
    },
    {
        title: 'Service',
        url: '/service',
        cName: 'nav-links',
        icon: 'fa-solid fa-briefcase'
    },
    {
        title: 'Contact',
        url: '/contact',
        cName: 'nav-links',
        icon: 'fa-solid fa-address-book' // 🛠 fixed missing "fa-" here
    },
    {
        title: 'Sign Up',
        url: '/signup',
        cName: 'nav-links-mobile'
    }
];
