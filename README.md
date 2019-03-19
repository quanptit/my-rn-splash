Cái Splash Screen Lúc mở ứng dụng
## Installation

##### Thêm Vào package.json
```
"my-rn-splash": "git+https://gitlab.com/react-native-my-libs/my-rn-splash.git",
```

Chạy  lệnh sau
```
npm install
```

## Sử dụng
```javascript
 private _renderWithSplashView() {
        return (
            <View style={{flex: 1}}>
                <VContainerLoad loadDataAsync={this.loadDataAsync.bind(this)}
                                isUsingInteraction={false}
                                onReady={() => {
                                    this.splashView && this.splashView.hide();
                                }}
                                onError={() => {
                                    this.splashView && this.splashView.hide();
                                }}
                                onRender={this.renderContent.bind(this)}/>
                <SplashView ref={(ref) => {this.splashView = ref}}
                            appIcon={require("../assets/ic_launcher.png")}/>
            </View>
        )
    }
    
 
    render() {
        console.log("render App Loadding");
        if (Keys.showSplashView) {
            return this._renderWithSplashView()
        } else
            return this._renderNoSplash();
    }
```
