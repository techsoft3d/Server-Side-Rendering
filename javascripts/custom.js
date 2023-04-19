cameras = [
    //home view 
    {
        "position": {
            "x": -36804.90524878874,
            "y": 71266.17035594565,
            "z": 34749.36808953367
        },
        "target": {
            "x": 41109.81923776456,
            "y": 102745.76085618719,
            "z": 16887.44670812786
        },
        "up": {
            "x": 0.1927723563675583,
            "y": 0.07788508370153654,
            "z": 0.9781476025413056
        },
        "width": 85911.09813950275,
        "height": 85911.09813950275,
        "projection": 0,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
    //outside view 
    {
        "position": {
            "x": 89262.78412481527,
            "y": 78387.73229727754,
            "z": 33430.05795618719
        },
        "target": {
            "x": 84513.10618204686,
            "y": 82943.36922963831,
            "z": 31045.37106259091
        },
        "up": {
            "x": -0.24585950854704797,
            "y": 0.23581528491091033,
            "z": 0.9401830957102931
        },
        "width": 7000.000000000002,
        "height": 7000.000000000002,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
    //hvac 
    {
        "position": {
            "x": 53115.762261652315,
            "y": 124239.69816180327,
            "z": 29017.93597081994
        },
        "target": {
            "x": 59298.521005472765,
            "y": 121263.392897729,
            "z": 27634.06412315644
        },
        "up": {
            "x": 0.1781309214844992,
            "y": -0.08575007068464574,
            "z": 0.9802633830704182
        },
        "width": 7000,
        "height": 7000,
        "projection": 1,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
    },
    

//stairs
{
    "position": {
        "x": 34411.08731354417,
        "y": 94106.42177294883,
        "z": 8956.4303670191
    },
    "target": {
        "x": 38417.36992389011,
        "y": 99728.83251181974,
        "z": 7799.625660308086
    },
    "up": {
        "x": 0.09589994450791678,
        "y": 0.13458583187966294,
        "z": 0.986250401521154
    },
    "width": 6999.9999999999945,
    "height": 6999.9999999999945,
    "projection": 1,
    "nearLimit": 0.01,
    "className": "Communicator.Camera"
},
];

function setView(val) {
    var camera = Communicator.Camera.construct(cameras[val]);
    hwv.getView().setCamera(camera, 500);

    if (val == 0) {
        hwv.operatorManager.set(Communicator.OperatorId.Navigate, 0);
    }
    else {
        hwv.operatorManager.set(Communicator.OperatorId.Navigate, 0);
        enableWalk();
    }

}

function snapToView(val) {
    if (val >= 0) {
        var camera = Communicator.Camera.construct(cameras[val]);
        hwv.getView().setCamera(camera, 500); // about as fast as this can go
    }
}

function enableWalk() {

    var walkModeOperator = hwv.operatorManager.getOperator(Communicator.OperatorId.WalkMode);
    var walkMode = 0;
    walkModeOperator.setWalkMode(walkMode);
    hwv.operatorManager.set(Communicator.OperatorId.WalkMode, 0);
}