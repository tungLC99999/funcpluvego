import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'MesAlertes',
        path: '/',
        icon: <AiIcons.AiFillAlert/>,
        cName:'nav-text'
    },
    {
        title: 'MesAssets',
        path: '/asset',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title: 'MesContacts',
        path: '/contact',
        icon: <AiIcons.AiFillContacts/>,
        cName:'nav-text'
    },
    {
        title: 'Profil',
        path: '/profil',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin/>,
        cName:'nav-text'
    }
];