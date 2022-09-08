'use strict';

let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
let dailyText = document.querySelectorAll('.yesterday');
let weeklyText = document.querySelectorAll('.last-week');
let monthlyText = document.querySelectorAll('.last-month');

addEventListener('DOMContentLoaded', () => {
    weekly.classList.add('active');
    weeklyText.forEach((toHide) => {
        toHide.style.display = 'block';
    });
    monthlyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
    dailyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
});

daily.addEventListener('click', () => {
    daily.classList.add('active');
    weekly.classList.remove('active');
    monthly.classList.remove('active');
    weeklyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
    monthlyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
    dailyText.forEach((toHide) => {
        toHide.style.display = 'block';
    });
});

weekly.addEventListener('click', () => {
    weekly.classList.add('active');
    daily.classList.remove('active');
    monthly.classList.remove('active');
    weeklyText.forEach((toHide) => {
        toHide.style.display = 'block';
    });
    monthlyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
    dailyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
});

monthly.addEventListener('click', () => {
    monthly.classList.add('active');
    daily.classList.remove('active');
    weekly.classList.remove('active');
    weeklyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
    monthlyText.forEach((toHide) => {
        toHide.style.display = 'block';
    });
    dailyText.forEach((toHide) => {
        toHide.style.display = 'none';
    });
});

// Mio Julkunen
