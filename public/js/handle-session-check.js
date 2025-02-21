async function checkSession() {
    try {
        const response = await fetch('/check-session-state');
        if (response.status === 401) {
            // Session expired, redirect to login
            window.location.href = '/login';
        }
    } catch (error) {
        console.error('Error checking session:', error);
    }
}

// Run check every 30 seconds
setInterval(checkSession, 30000);
