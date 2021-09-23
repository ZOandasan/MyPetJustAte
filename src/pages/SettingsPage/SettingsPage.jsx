export default function SettingsPage(){

    function setLight(){
        document.documentElement.style.setProperty('--background', 'rgb(254, 251, 243)');
        document.documentElement.style.setProperty('--background-form', 'rgba(0, 75, 150, 0.2)');
        document.documentElement.style.setProperty('--background-title', 'rgba(0, 75, 150, 0.2)');
        document.documentElement.style.setProperty('--background-card', 'rgb(220, 220, 230)');
        document.documentElement.style.setProperty('--button', 'rgba(50, 200, 210, 0.8)');
        document.documentElement.style.setProperty('--button-hover', 'rgba(50, 200, 210)');
        document.documentElement.style.setProperty('--header-text', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--plain-text', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--link', 'rgb(50, 0, 100)');
        document.documentElement.style.setProperty('--link-visited', 'rgb(100, 0, 50)');
        document.documentElement.style.setProperty('--border', 'rgb(0, 0, 0)');
    }

    function setDark(){
        document.documentElement.style.setProperty('--background', '#292929');
        document.documentElement.style.setProperty('--background-form', '#3145b8');
        document.documentElement.style.setProperty('--background-title', '#3145b8');
        document.documentElement.style.setProperty('--background-card', '#525252');
        document.documentElement.style.setProperty('--button', '#6175b8');
        document.documentElement.style.setProperty('--button-hover', '#5badae');
        document.documentElement.style.setProperty('--header-text', 'rgb(240, 240, 240)');
        document.documentElement.style.setProperty('--plain-text', 'rgb(240, 240, 240)');
        document.documentElement.style.setProperty('--link', 'rgb(200, 250, 150)');
        document.documentElement.style.setProperty('--link-visited', 'rgb(150, 250, 200)');
        document.documentElement.style.setProperty('--border', 'rgb(250, 250, 250)');
    }

    function setSEITheme(){
        document.documentElement.style.setProperty('--background', 'rgb(250, 250, 250)');
        document.documentElement.style.setProperty('--background-form', '#ffecaf');
        document.documentElement.style.setProperty('--background-title', '#fecb65');
        document.documentElement.style.setProperty('--background-card', '#97cdb4');
        document.documentElement.style.setProperty('--button', '#99ec65');
        document.documentElement.style.setProperty('--button-hover', '#99ee99');
        document.documentElement.style.setProperty('--header-text', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--plain-text', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--link', 'rgb(50, 0, 100)');
        document.documentElement.style.setProperty('--link-visited', 'rgb(100, 0, 50)');
        document.documentElement.style.setProperty('--border', 'rgb(0, 0, 0)');
    }

    return (
        <div>
            <h1>Settings Page</h1>
            <div>
                <p>Customize your experience. Keep your pup healthy in a stylish way.</p>
                <div>
                    <a onClick={() => setLight()}>Beta Mode</a>
                </div>
                <br />
                <div>
                    <a onClick={() => setDark()}>Dark Mode</a>
                </div>
                <br />
                <div>
                    <a onClick={() => setSEITheme()}>Dog Mode</a>
                </div>
                    {/*
                    <a onClick={() => setNewTheme()}>Alt Theme</a>
                    */}
            </div>
        </div>
    )
}