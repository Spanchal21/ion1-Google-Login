# ion1-google-login
ionic1 google login ANDROID/IOS with steps


Ionic1 Android Google login 
1) Create ionic1 app

2) Open this link for create or configure google app.
	https://developers.google.com/mobile/add
	and follow this steps - click on Pick a platform > android > app name (existing/new) and 	package name > continue > select google signin > put SHA-1 key > enable google signin

3) set your project path in CLI and install plugin 
	“cordova plugin add cordova-plugin-googleplus –variable REVERSED_CLIENT_ID=myreversedclientid”
	
Note - 
	package name 
	take package name from created ionic project
	Steps - open project > open config.xml > “com.ionicframework.XYZ” (2nd line <widget id="com.ionicframework.XYZ")

	SHA-1 key create steps
	create SHA-1 key from CLI on your machine 
	Steps - command run keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
	without password press enter.
	your SHA-1 key is there  ex - P0:68:E4:AC:E7:7B:85:16:DA:F3:DC:F2:A1:7A:BC:F1:73:D4:B0:P8
	



Ionic1 IOS Google login 

1) Create ionic1 app

2) Open this link for create or configure google app.
	https://developers.google.com/mobile/add
	and follow this steps - click on Pick a platform > IOS > app name (existing/new) and 	package name > continue > select google signin > enable google signin

3) open this link 
	https://console.developers.google.com
	open your app > credentials > select IOS > copy iOS URL scheme
	ex - “com.googleusercontent.apps.12121212121-j3u46qmlej6uo6qjo17a3ekpolu4nn0q”


3) set your project path in CLI and install plugin (replase your REVERSED_CLIENT_ID)
	“cordova plugin add cordova-plugin-googleplus –variable REVERSED_CLIENT_ID=com.googleusercontent.apps.12121212121-j3u46qmlej6uo6qjo17a3ekpolu4nn0q”

4) after build for ios 10
	Xcode > Capabilities  
	 Keychain sharing “ON” for iOS 10
