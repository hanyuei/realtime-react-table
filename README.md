#Realtime table

Simple Demo to real time share tables.

### Stack

- [facebook/react](https://github.com/facebook/react) - View
- [reactjs/redux](https://github.com/reactjs/redux) - App State
- [rethinkdb/horizon](https://github.com/rethinkdb/horizon) - Realtime Database Sync
- [flipace/horizon-react](https://github.com/flipace/horizon-react) - Connect View + Data
- [gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader) - Hot Reloading of React Components
- [webpack/webpack](https://github.com/webpack/webpack) - Builds & Dev-Server
- [Ant Design](http://ant.design/) - UI

### installation

```bash

# make sure to have node and npm installed.
# ( {"node":">=4.0.0","npm":">=3.0.0"})

# make sure install rethinkdb

git clone https://github.com/CoderRooftrellen/realtime-table
cd realtime-table
npm install

```

### Run

```bash
#start horizon and rethinkdb server
hz serve --dev

#compile project and start http server.
#npm install -g webpack
webpack --watch --progress --colors
```