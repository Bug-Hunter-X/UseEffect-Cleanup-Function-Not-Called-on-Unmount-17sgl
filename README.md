# React 19 useEffect Cleanup Issue

This repository demonstrates a problem where the cleanup function within a `useEffect` hook in React 19 isn't being called when the component unmounts.  This can lead to memory leaks and unexpected behavior.

## Problem Description

The `useEffect` hook includes a cleanup function that should execute before a component is unmounted.  In this example, the cleanup function logs 'Unmounted!', but this message never appears in the console.

## Solution

The issue is resolved by ensuring the component actually unmounts correctly.  Often this is caused by improper rendering logic or state management which prevents the component from detaching from the DOM.