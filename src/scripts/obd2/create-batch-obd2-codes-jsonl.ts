import fs from "fs";
import path from "path";

const codes = [
    {
        id: "P0101",
        value: "Mass or Volume Air Flow Circuit Range/Performance Problem",
    },
    {
        id: "P0102",
        value: "Mass or Volume Air Flow Circuit Low Input",
    },
    {
        id: "P0103",
        value: "Mass or Volume Air Flow Circuit High Input",
    },
    {
        id: "P0104",
        value: "Mass or Volume Air Flow Circuit Intermittent",
    },
    {
        id: "P0105",
        value: "Manifold Absolute Pressure/Barometric Pressure Circuit Malfunction",
    },
    {
        id: "P0106",
        value: "Manifold Absolute Pressure/Barometric Pressure Circuit Range/Performance Problem",
    },
    {
        id: "P0107",
        value: "Manifold Absolute Pressure/Barometric Pressure Circuit Low Input",
    },
    {
        id: "P0108",
        value: "Manifold Absolute Pressure/Barometric Pressure Circuit High Input",
    },
    {
        id: "P0109",
        value: "Manifold Absolute Pressure/Barometric Pressure Circuit Intermittent",
    },
    {
        id: "P0110",
        value: "IAT Circuit Malfunction",
    },
    {
        id: "P0111",
        value: "Intake Air Temperature Circuit Range/Performance Problem",
    },
    {
        id: "P0112",
        value: "Intake Air Temperature Circuit Low Input",
    },
    {
        id: "P0113",
        value: "Intake Air Temperature Circuit High Input",
    },
    {
        id: "P0114",
        value: "Intake Air Temperature Circuit Intermittent",
    },
    {
        id: "P0115",
        value: "Engine Coolant Temperature Circuit Malfunction",
    },
    {
        id: "P0116",
        value: "Engine Coolant Temperature Circuit Range/Performance Problem",
    },
    {
        id: "P0117",
        value: "Engine Coolant Temperature Circuit Low Input",
    },
    {
        id: "P0118",
        value: "Engine Coolant Temperature Circuit High Input",
    },
    {
        id: "P0119",
        value: "Engine Coolant Temperature Circuit Intermittent",
    },
    {
        id: "P0120",
        value: "Throttle Position Sensor/Switch A Circuit Malfunction",
    },
    {
        id: "P0121",
        value: "Throttle Position Sensor/Switch A Circuit Range/Performance Problem",
    },
    {
        id: "P0122",
        value: "Throttle Position Sensor/Switch A Circuit Low Input",
    },
    {
        id: "P0123",
        value: "Throttle Position Sensor/Switch A Circuit High Input",
    },
    {
        id: "P0124",
        value: "Throttle Position Sensor/Switch A Circuit Intermittent",
    },
    {
        id: "P0125",
        value: "Insufficient Coolant Temperature for Closed Loop Fuel Control;",
    },
    {
        id: "P0126",
        value: "ECT Excessive Time to Closed Loop Fuel Control",
    },
    {
        id: "P0128",
        value: "Insufficient Coolant Temperature for Stable Operation",
    },
    {
        id: "P0130",
        value: "Coolant Thermostat Malfunction",
    },
    {
        id: "P0131",
        value: "O2 Sensor Circuit Malfunction (Bank 1 Sensor 1)",
    },
    {
        id: "P0132",
        value: "O2 Sensor Circuit Low Voltage (Bank 1 Sensor 1)",
    },
    {
        id: "P0133",
        value: "O2 Sensor Circuit High Voltage (Bank 1 Sensor 1)",
    },
    {
        id: "P0134",
        value: "O2 Sensor Circuit Slow Response (Bank 1 Sensor 1)",
    },
    {
        id: "P0135",
        value: "O2 Sensor Circuit No Activity Detected (Bank 1 Sensor 1)",
    },
    {
        id: "P0136",
        value: "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 1)",
    },
    {
        id: "P0137",
        value: "O2 Sensor Circuit Malfunction (Bank 1 Sensor 2)",
    },
    {
        id: "P0138",
        value: "O2 Sensor Circuit Low Voltage (Bank 1 Sensor 2)",
    },
    {
        id: "P0139",
        value: "O2 Sensor Circuit High Voltage (Bank 1 Sensor 2)",
    },
    {
        id: "P0140",
        value: "O2 Sensor Circuit Slow Response (Bank 1 Sensor 2)",
    },
    {
        id: "P0141",
        value: "O2 Sensor Circuit No Activity Detected (Bank 1 Sensor 2)",
    },
    {
        id: "P0142",
        value: "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)",
    },
    {
        id: "P0143",
        value: "O2 Sensor Circuit Malfunction (Bank 1 Sensor 3)",
    },
    {
        id: "P0144",
        value: "O2 Sensor Circuit Low Voltage (Bank 1 Sensor 3)",
    },
    {
        id: "P0145",
        value: "O2 Sensor Circuit High Voltage (Bank 1 Sensor 3)",
    },
    {
        id: "P0146",
        value: "O2 Sensor Circuit Slow Response (Bank 1 Sensor 3)",
    },
    {
        id: "P0147",
        value: "O2 Sensor Circuit No Activity Detected (Bank 1 Sensor 3)",
    },
    {
        id: "P0150",
        value: "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 3)",
    },
    {
        id: "P0151",
        value: "O2 Sensor Circuit Malfunction (Bank 2 Sensor 1)",
    },
    {
        id: "P0152",
        value: "O2 Sensor Circuit Low Voltage (Bank 2 Sensor 1)",
    },
    {
        id: "P0153",
        value: "O2 Sensor Circuit High Voltage (Bank 2 Sensor 1)",
    },
    {
        id: "P0154",
        value: "O2 Sensor Circuit Slow Response (Bank 2 Sensor 1)",
    },
    {
        id: "P0155",
        value: "O2 Sensor Circuit No Activity Detected (Bank 2 Sensor 1)",
    },
    {
        id: "P0156",
        value: "O2 Sensor Heater Circuit Malfunction (Bank 2 Sensor 1)",
    },
    {
        id: "P0157",
        value: "O2 Sensor Circuit Malfunction (Bank 2 Sensor 2)",
    },
    {
        id: "P0158",
        value: "O2 Sensor Circuit Low Voltage (Bank 2 Sensor 2)",
    },
    {
        id: "P0159",
        value: "O2 Sensor Circuit High Voltage (Bank 2 Sensor 2)",
    },
    {
        id: "P0160",
        value: "O2 Sensor Circuit Slow Response (Bank 2 Sensor 2)",
    },
    {
        id: "P0161",
        value: "O2 Sensor Circuit No Activity Detected (Bank 2 Sensor 2)",
    },
    {
        id: "P0162",
        value: "O2 Sensor Heater Circuit Malfunction (Bank 2 Sensor 2)",
    },
    {
        id: "P0163",
        value: "O2 Sensor Circuit Malfunction (Bank 2 Sensor 3)",
    },
    {
        id: "P0164",
        value: "O2 Sensor Circuit Low Voltage (Bank 2 Sensor 3)",
    },
    {
        id: "P0165",
        value: "O2 Sensor Circuit High Voltage (Bank 2 Sensor 3)",
    },
    {
        id: "P0166",
        value: "O2 Sensor Circuit Slow Response (Bank 2 Sensor 3)",
    },
    {
        id: "P0167",
        value: "O2 Sensor Circuit No Activity Detected (Bank 2 Sensor 3)",
    },
    {
        id: "P0170",
        value: "O2 Sensor Heater Circuit Malfunction (Bank 2 Sensor 3)",
    },
    {
        id: "P0171",
        value: "Fuel Trim Malfunction (Bank 1)",
    },
    {
        id: "P0172",
        value: "Fuel Trim System Lean (Bank 1)",
    },
    {
        id: "P0173",
        value: "Fuel Trim too Rich (Bank 1)",
    },
    {
        id: "P0174",
        value: "Fuel Trim Malfunction (Bank 2)",
    },
    {
        id: "P0175",
        value: "Fuel Trim too Lean (Bank 2)",
    },
    {
        id: "P0176",
        value: "Fuel Trim too Rich (Bank 2)",
    },
    {
        id: "P0177",
        value: "Fuel Composition Sensor Circuit Malfunction",
    },
    {
        id: "P0178",
        value: "Fuel Composition Sensor Circuit Range/Performance",
    },
    {
        id: "P0179",
        value: "Fuel Composition Sensor Circuit Low Input",
    },
    {
        id: "P0180",
        value: "Fuel Composition Sensor Circuit High Input",
    },
    {
        id: "P0181",
        value: "Fuel Temperature Sensor A Circuit Malfunction",
    },
    {
        id: "P0182",
        value: "Fuel Temperature Sensor A Circuit Range/Performance",
    },
    {
        id: "P0183",
        value: "Fuel Temperature Sensor A Circuit Low Input",
    },
    {
        id: "P0184",
        value: "Fuel Temperature Sensor A Circuit High Input",
    },
    {
        id: "P0185",
        value: "Fuel Temperature Sensor A Circuit Intermittent",
    },
    {
        id: "P0186",
        value: "Fuel Temperature Sensor B Circuit Malfunction",
    },
    {
        id: "P0187",
        value: "Fuel Temperature Sensor B Circuit Range/Performance",
    },
    {
        id: "P0188",
        value: "Fuel Temperature Sensor B Circuit Low Input",
    },
    {
        id: "P0189",
        value: "Fuel Temperature Sensor B Circuit High Input",
    },
    {
        id: "P0190",
        value: "Fuel Temperature Sensor B Circuit Intermittent",
    },
    {
        id: "P0191",
        value: "Fuel Rail Pressure Sensor Circuit Malfunction",
    },
    {
        id: "P0192",
        value: "Fuel Rail Pressure Sensor Circuit Range/Performance",
    },
    {
        id: "P0193",
        value: "Fuel Rail Pressure Sensor Circuit Low Input",
    },
    {
        id: "P0194",
        value: "Fuel Rail Pressure Sensor Circuit High Input",
    },
    {
        id: "P0195",
        value: "Fuel Rail Pressure Sensor Circuit Intermittent",
    },
    {
        id: "P0196",
        value: "Engine Oil Temperature Sensor Malfunction",
    },
    {
        id: "P0197",
        value: "Engine Oil Temperature Sensor Range/Performance",
    },
    {
        id: "P0198",
        value: "Engine Oil Temperature Sensor Low",
    },
    {
        id: "P0199",
        value: "Engine Oil Temperature Sensor High",
    },
    {
        id: "P0200",
        value: "Engine Oil Temperature Sensor Intermittent",
    },
    {
        id: "P0201",
        value: "Injector Circuit Malfunction",
    },
    {
        id: "P0202",
        value: "Injector Circuit Malfunction - Cylinder 1",
    },
    {
        id: "P0203",
        value: "Injector Circuit Malfunction - Cylinder 2",
    },
    {
        id: "P0204",
        value: "Injector Circuit Malfunction - Cylinder 3",
    },
    {
        id: "P0205",
        value: "Injector Circuit Malfunction - Cylinder 4",
    },
    {
        id: "P0206",
        value: "Injector Circuit Malfunction - Cylinder 5",
    },
    {
        id: "P0207",
        value: "Injector Circuit Malfunction - Cylinder 6",
    },
    {
        id: "P0208",
        value: "Injector Circuit Malfunction - Cylinder 7",
    },
    {
        id: "P0209",
        value: "Injector Circuit Malfunction - Cylinder 8",
    },
    {
        id: "P0210",
        value: "Injector Circuit Malfunction - Cylinder 9",
    },
    {
        id: "P0211",
        value: "Injector Circuit Malfunction - Cylinder 10",
    },
    {
        id: "P0212",
        value: "Injector Circuit Malfunction - Cylinder 11",
    },
    {
        id: "P0213",
        value: "Injector Circuit Malfunction - Cylinder 12",
    },
    {
        id: "P0214",
        value: "Cold Start Injector 1 Malfunction",
    },
    {
        id: "P0215",
        value: "Cold Start Injector 2 Malfunction",
    },
    {
        id: "P0216",
        value: "Engine Shutoff Solenoid Malfunction",
    },
    {
        id: "P0217",
        value: "Injection Timing Control Circuit Malfunction",
    },
    {
        id: "P0218",
        value: "Engine Overtemp Condition",
    },
    {
        id: "P0219",
        value: "Transmission Over Temperature Condition",
    },
    {
        id: "P0220",
        value: "Engine Overspeed Condition",
    },
    {
        id: "P0221",
        value: "Throttle/Petal Position Sensor/Switch B Circuit Malfunction",
    },
    {
        id: "P0222",
        value: "Throttle/Petal Position Sensor/Switch B Circuit Range/Performance Problem",
    },
    {
        id: "P0223",
        value: "Throttle/Petal Position Sensor/Switch B Circuit Low Input",
    },
    {
        id: "P0224",
        value: "Throttle/Petal Position Sensor/Switch B Circuit High Input",
    },
    {
        id: "P0225",
        value: "Throttle/Petal Position Sensor/Switch B Circuit Intermittent",
    },
    {
        id: "P0226",
        value: "Throttle/Petal Position Sensor/Switch C Circuit Malfunction",
    },
    {
        id: "P0227",
        value: "Throttle/Petal Position Sensor/Switch C Circuit Range/Performance Problem",
    },
    {
        id: "P0228",
        value: "Throttle/Petal Position Sensor/Switch C Circuit Low Input",
    },
    {
        id: "P0229",
        value: "Throttle/Petal Position Sensor/Switch C Circuit High Input",
    },
    {
        id: "P0230",
        value: "Throttle/Petal Position Sensor/Switch C Circuit Intermittent",
    },
    {
        id: "P0231",
        value: "Fuel Pump Primary Circuit Malfunction",
    },
    {
        id: "P0232",
        value: "Fuel Pump Secondary Circuit Low",
    },
    {
        id: "P0233",
        value: "Fuel Pump Secondary Circuit High",
    },
    {
        id: "P0234",
        value: "Fuel Pump Secondary Circuit Intermittent",
    },
    {
        id: "P0235",
        value: "Engine Overboost Condition",
    },
    {
        id: "P0236",
        value: "Turbocharger Boost Sensor A Circuit Malfunction",
    },
    {
        id: "P0237",
        value: "Turbocharger Boost Sensor A Circuit Range/Performance",
    },
    {
        id: "P0238",
        value: "Turbocharger Boost Sensor A Circuit Low",
    },
    {
        id: "P0239",
        value: "Turbocharger Boost Sensor A Circuit High",
    },
    {
        id: "P0240",
        value: "Turbocharger Boost Sensor B Malfunction",
    },
    {
        id: "P0241",
        value: "Turbocharger Boost Sensor B Circuit Range/Performance",
    },
    {
        id: "P0242",
        value: "Turbocharger Boost Sensor B Circuit Low",
    },
    {
        id: "P0243",
        value: "Turbocharger Boost Sensor B Circuit High",
    },
    {
        id: "P0244",
        value: "Turbocharger Wastegate Solenoid A Malfunction",
    },
    {
        id: "P0245",
        value: "Turbocharger Wastegate Solenoid A Range/Performance",
    },
    {
        id: "P0246",
        value: "Turbocharger Wastegate Solenoid A Low",
    },
    {
        id: "P0247",
        value: "Turbocharger Wastegate Solenoid A High",
    },
    {
        id: "P0248",
        value: "Turbocharger Wastegate Solenoid B Malfunction",
    },
    {
        id: "P0249",
        value: "Turbocharger Wastegate Solenoid B Range/Performance",
    },
    {
        id: "P0250",
        value: "Turbocharger Wastegate Solenoid B Low",
    },
    {
        id: "P0251",
        value: "Turbocharger Wastegate Solenoid B High",
    },
    {
        id: "P0252",
        value: 'Injection Pump Fuel Metering Control "A" Malfunction (Cam/Rotor/Injector)',
    },
    {
        id: "P0253",
        value: 'Injection Pump Fuel Metering Control "A" Range/Performance (Cam/Rotor/Injector)',
    },
    {
        id: "P0254",
        value: 'Injection Pump Fuel Metering Control "A" Low (Cam/Rotor/Injector)',
    },
    {
        id: "P0255",
        value: 'Injection Pump Fuel Metering Control "A" High (Cam/Rotor/Injector)',
    },
    {
        id: "P0256",
        value: 'Injection Pump Fuel Metering Control "A" Intermittent (Cam/Rotor/Injector)',
    },
    {
        id: "P0257",
        value: 'Injection Pump Fuel Metering Control "B" Malfunction (Cam/Rotor/Injector)',
    },
    {
        id: "P0258",
        value: 'Injection Pump Fuel Metering Control "B" Range/Performance (Cam/Rotor/Injector)',
    },
    {
        id: "P0259",
        value: 'Injection Pump Fuel Metering Control "B" Low (Cam/Rotor/Injector)',
    },
    {
        id: "P0260",
        value: 'Injection Pump Fuel Metering Control "B" High (Cam/Rotor/Injector)',
    },
    {
        id: "P0261",
        value: 'Injection Pump Fuel Metering Control "B" Intermittent (Cam/Rotor/Injector)',
    },
    {
        id: "P0262",
        value: "Cylinder 1 Injector Circuit Low",
    },
    {
        id: "P0263",
        value: "Cylinder 1 Injector Circuit High",
    },
    {
        id: "P0264",
        value: "Cylinder 1 Contribution/Balance Fault",
    },
    {
        id: "P0265",
        value: "Cylinder 2 Injector Circuit Low",
    },
    {
        id: "P0266",
        value: "Cylinder 2 Injector Circuit High",
    },
    {
        id: "P0267",
        value: "Cylinder 2 Contribution/Balance Fault",
    },
    {
        id: "P0268",
        value: "Cylinder 3 Injector Circuit Low",
    },
    {
        id: "P0269",
        value: "Cylinder 3 Injector Circuit High",
    },
    {
        id: "P0270",
        value: "Cylinder 3 Contribution/Balance Fault",
    },
    {
        id: "P0271",
        value: "Cylinder 4 Injector Circuit Low",
    },
    {
        id: "P0272",
        value: "Cylinder 4 Injector Circuit High",
    },
    {
        id: "P0273",
        value: "Cylinder 4 Contribution/Balance Fault",
    },
    {
        id: "P0274",
        value: "Cylinder 5 Injector Circuit Low",
    },
    {
        id: "P0275",
        value: "Cylinder 5 Injector Circuit High",
    },
    {
        id: "P0276",
        value: "Cylinder 5 Contribution/Balance Fault",
    },
    {
        id: "P0277",
        value: "Cylinder 6 Injector Circuit Low",
    },
    {
        id: "P0278",
        value: "Cylinder 6 Injector Circuit High",
    },
    {
        id: "P0279",
        value: "Cylinder 6 Contribution/Balance Fault",
    },
    {
        id: "P0280",
        value: "Cylinder 7 Injector Circuit Low",
    },
    {
        id: "P0281",
        value: "Cylinder 7 Injector Circuit High",
    },
    {
        id: "P0282",
        value: "Cylinder 7 Contribution/Balance Fault",
    },
    {
        id: "P0283",
        value: "Cylinder 8 Injector Circuit Low",
    },
    {
        id: "P0284",
        value: "Cylinder 8 Injector Circuit High",
    },
    {
        id: "P0285",
        value: "Cylinder 8 Contribution/Balance Fault",
    },
    {
        id: "P0286",
        value: "Cylinder 9 Injector Circuit Low",
    },
    {
        id: "P0287",
        value: "Cylinder 9 Injector Circuit High",
    },
    {
        id: "P0288",
        value: "Cylinder 9 Contribution/Balance Fault",
    },
    {
        id: "P0289",
        value: "Cylinder 10 Injector Circuit Low",
    },
    {
        id: "P0290",
        value: "Cylinder 10 Injector Circuit High",
    },
    {
        id: "P0291",
        value: "Cylinder 10 Contribution/Balance Fault",
    },
    {
        id: "P0292",
        value: "Cylinder 11 Injector Circuit Low",
    },
    {
        id: "P0293",
        value: "Cylinder 11 Injector Circuit High",
    },
    {
        id: "P0294",
        value: "Cylinder 11 Contribution/Balance Fault",
    },
    {
        id: "P0295",
        value: "Cylinder 12 Injector Circuit Low",
    },
    {
        id: "P0296",
        value: "Cylinder 12 Injector Circuit High",
    },
    {
        id: "P0300",
        value: "Cylinder 12 Contribution/Range Fault",
    },
    {
        id: "P0301",
        value: "Random/Multiple Cylinder Misfire Detected",
    },
    {
        id: "P0302",
        value: "Cylinder 1 Misfire Detected",
    },
    {
        id: "P0303",
        value: "Cylinder 2 Misfire Detected",
    },
    {
        id: "P0304",
        value: "Cylinder 3 Misfire Detected",
    },
    {
        id: "P0305",
        value: "Cylinder 4 Misfire Detected",
    },
    {
        id: "P0306",
        value: "Cylinder 5 Misfire Detected",
    },
    {
        id: "P0307",
        value: "Cylinder 6 Misfire Detected",
    },
    {
        id: "P0308",
        value: "Cylinder 7 Misfire Detected",
    },
    {
        id: "P0309",
        value: "Cylinder 8 Misfire Detected",
    },
    {
        id: "P0310",
        value: "Cylinder 9 Misfire Detected",
    },
    {
        id: "P0311",
        value: "Cylinder 10 Misfire Detected",
    },
    {
        id: "P0312",
        value: "Cylinder 11 Misfire Detected",
    },
    {
        id: "P0320",
        value: "Cylinder 12 Misfire Detected",
    },
    {
        id: "P0321",
        value: "Ignition/Distributor Engine Speed Input Circuit Malfunction",
    },
    {
        id: "P0322",
        value: "Ignition/Distributor Engine Speed Input Circuit Range/Performance",
    },
    {
        id: "P0323",
        value: "Ignition/Distributor Engine Speed Input Circuit No Signal",
    },
    {
        id: "P0325",
        value: "Ignition/Distributor Engine Speed Input Circuit Intermittent",
    },
    {
        id: "P0326",
        value: "Knock Sensor 1 Circuit Malfunction (Bank 1 or Single Sensor)",
    },
    {
        id: "P0327",
        value: "Knock Sensor 1 Circuit Range/Performance (Bank 1 or Single Sensor)",
    },
    {
        id: "P0328",
        value: "Knock Sensor 1 Circuit Low Input (Bank 1 or Single Sensor)",
    },
    {
        id: "P0329",
        value: "Knock Sensor 1 Circuit High Input (Bank 1 or Single Sensor)",
    },
    {
        id: "P0330",
        value: "Knock Sensor 1 Circuit Intermittent (Bank 1 or Single Sensor)",
    },
    {
        id: "P0331",
        value: "Knock Sensor 2 Circuit Malfunction (Bank 2)",
    },
    {
        id: "P0332",
        value: "Knock Sensor 2 Circuit Range/Performance (Bank 2)",
    },
    {
        id: "P0333",
        value: "Knock Sensor 2 Circuit Low Input (Bank 2)",
    },
    {
        id: "P0334",
        value: "Knock Sensor 2 Circuit High Input (Bank 2)",
    },
    {
        id: "P0335",
        value: "Knock Sensor 2 Circuit Intermittent (Bank 2)",
    },
    {
        id: "P0336",
        value: "Crankshaft Position Sensor A Circuit Malfunction",
    },
    {
        id: "P0337",
        value: "Crankshaft Position Sensor A Circuit Range/Performance",
    },
    {
        id: "P0338",
        value: "Crankshaft Position Sensor A Circuit Low Input",
    },
    {
        id: "P0339",
        value: "Crankshaft Position Sensor A Circuit High Input",
    },
    {
        id: "P0340",
        value: "Crankshaft Position Sensor A Circuit Intermittent",
    },
    {
        id: "P0341",
        value: "Camshaft Position Sensor Circuit Malfunction",
    },
    {
        id: "P0342",
        value: "Camshaft Position Sensor Circuit Range/Performance",
    },
    {
        id: "P0343",
        value: "Camshaft Position Sensor Circuit Low Input",
    },
    {
        id: "P0344",
        value: "Camshaft Position Sensor Circuit High Input",
    },
    {
        id: "P0350",
        value: "Camshaft Position Sensor Circuit Intermittent",
    },
    {
        id: "P0351",
        value: "Ignition Coil Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0352",
        value: "Ignition Coil A Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0353",
        value: "Ignition Coil B Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0354",
        value: "Ignition Coil C Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0355",
        value: "Ignition Coil D Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0356",
        value: "Ignition Coil E Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0357",
        value: "Ignition Coil F Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0358",
        value: "Ignition Coil G Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0359",
        value: "Ignition Coil H Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0360",
        value: "Ignition Coil I Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0361",
        value: "Ignition Coil J Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0362",
        value: "Ignition Coil K Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0370",
        value: "Ignition Coil L Primary/Secondary Circuit Malfunction",
    },
    {
        id: "P0371",
        value: "Timing Reference High Resolution Signal A Malfunction",
    },
    {
        id: "P0372",
        value: "Timing Reference High Resolution Signal A Too Many Pulses",
    },
    {
        id: "P0373",
        value: "Timing Reference High Resolution Signal A Too Few Pulses",
    },
    {
        id: "P0374",
        value: "Timing Reference High Resolution Signal A Intermittent/Erratic Pulses",
    },
    {
        id: "P0375",
        value: "Timing Reference High Resolution Signal A No Pulses",
    },
    {
        id: "P0376",
        value: "Timing Reference High Resolution Signal B Malfunction",
    },
    {
        id: "P0377",
        value: "Timing Reference High Resolution Signal B Too Many Pulses",
    },
    {
        id: "P0378",
        value: "Timing Reference High Resolution Signal B Too Few Pulses",
    },
    {
        id: "P0379",
        value: "Timing Reference High Resolution Signal B Intermittent/Erratic Pulses",
    },
    {
        id: "P0380",
        value: "Timing Reference High Resolution Signal B No Pulses",
    },
    {
        id: "P0381",
        value: 'Glow Plug/Heater Circuit "A" Malfunction',
    },
    {
        id: "P0382",
        value: "Glow Plug/Heater Indicator Circuit Malfunction",
    },
    {
        id: "P0385",
        value: "Exhaust Gas Recirculation Flow Malfunction",
    },
    {
        id: "P0386",
        value: "Crankshaft Position Sensor B Circuit Malfunction",
    },
    {
        id: "P0387",
        value: "Crankshaft Position Sensor B Circuit Range/Performance",
    },
    {
        id: "P0388",
        value: "Crankshaft Position Sensor B Circuit Low Input",
    },
    {
        id: "P0389",
        value: "Crankshaft Position Sensor B Circuit High Input",
    },
    {
        id: "P0400",
        value: "Crankshaft Position Sensor B Circuit Intermittent",
    },
    {
        id: "P0401",
        value: "Exhaust Gas Recirculation Flow Malfunction",
    },
    {
        id: "P0402",
        value: "Exhaust Gas Recirculation Flow Insufficient Detected",
    },
    {
        id: "P0403",
        value: "Exhaust Gas Recirculation Flow Excessive Detected",
    },
    {
        id: "P0404",
        value: "Exhaust Gas Recirculation Circuit Malfunction",
    },
    {
        id: "P0405",
        value: "Exhaust Gas Recirculation Circuit Range/Performance",
    },
    {
        id: "P0406",
        value: "Exhaust Gas Recirculation Sensor A Circuit Low",
    },
    {
        id: "P0407",
        value: "Exhaust Gas Recirculation Sensor A Circuit High",
    },
    {
        id: "P0408",
        value: "Exhaust Gas Recirculation Sensor B Circuit Low",
    },
    {
        id: "P0410",
        value: "Exhaust Gas Recirculation Sensor B Circuit High",
    },
    {
        id: "P0411",
        value: "Secondary Air Injection System Malfunction",
    },
    {
        id: "P0412",
        value: "Secondary Air Injection System Incorrect Flow Detected",
    },
    {
        id: "P0413",
        value: "Secondary Air Injection System Switching Valve A Circuit Malfunction",
    },
    {
        id: "P0414",
        value: "Secondary Air Injection System Switching Valve A Circuit Open",
    },
    {
        id: "P0415",
        value: "Secondary Air Injection System Switching Valve A Circuit Shorted",
    },
    {
        id: "P0416",
        value: "Secondary Air Injection System Switching Valve B Circuit Malfunction",
    },
    {
        id: "P0417",
        value: "Secondary Air Injection System Switching Valve B Circuit Open",
    },
    {
        id: "P0418",
        value: "Secondary Air Injection System Switching Valve B Circuit Shorted",
    },
    {
        id: "P0419",
        value: 'Secondary Air Injection System Relay "A" Circuit Malfunction',
    },
    {
        id: "P0420",
        value: 'Secondary Air Injection System Relay "B" Circuit Malfunction',
    },
    {
        id: "P0421",
        value: "Catalyst System Efficiency Below Threshold (Bank 1)",
    },
    {
        id: "P0422",
        value: "Warm Up Catalyst Efficiency Below Threshold (Bank 1)",
    },
    {
        id: "P0423",
        value: "Main Catalyst Efficiency Below Threshold (Bank 1)",
    },
    {
        id: "P0424",
        value: "Heated Catalyst Efficiency Below Threshold (Bank 1)",
    },
    {
        id: "P0426",
        value: "Heated Catalyst Temperature Below Threshold (Bank 1)",
    },
    {
        id: "P0427",
        value: "Catalyst Temperature Sensor Range/Performance (Bank 1)",
    },
    {
        id: "P0428",
        value: "Catalyst Temperature Sensor Low Input (Bank 1)",
    },
    {
        id: "P0430",
        value: "Catalyst Temperature Sensor High Input (Bank 1)",
    },
    {
        id: "P0431",
        value: "Catalyst System Efficiency Below Threshold (Bank 2)",
    },
    {
        id: "P0432",
        value: "Warm Up Catalyst Efficiency Below Threshold (Bank 2)",
    },
    {
        id: "P0433",
        value: "Main Catalyst Efficiency Below Threshold (Bank 2)",
    },
    {
        id: "P0434",
        value: "Heated Catalyst Efficiency Below Threshold (Bank 2)",
    },
    {
        id: "P0436",
        value: "Heated Catalyst Temperature Below Threshold (Bank 2)",
    },
    {
        id: "P0437",
        value: "Catalyst Temperature Sensor Range/Performance (Bank 2)",
    },
    {
        id: "P0438",
        value: "Catalyst Temperature Sensor Low Input (Bank 2)",
    },
    {
        id: "P0440",
        value: "Catalyst Temperature Sensor High Input (Bank 2)",
    },
    {
        id: "P0441",
        value: "Evaporative Emission Control System Malfunction",
    },
    {
        id: "P0442",
        value: "Evaporative Emission Control System Incorrect Purge Flow",
    },
    {
        id: "P0443",
        value: "Evaporative Emission Control System Leak Detected (small leak)",
    },
    {
        id: "P0444",
        value: "Evaporative Emission Control System Purge Control Valve Circuit Malfunction",
    },
    {
        id: "P0445",
        value: "Evaporative Emission Control System Purge Control Valve Circuit Open",
    },
    {
        id: "P0446",
        value: "Evaporative Emission Control System Purge Control Valve Circuit Shorted",
    },
    {
        id: "P0447",
        value: "Evaporative Emission Control System Vent Control Circuit Malfunction",
    },
    {
        id: "P0448",
        value: "Evaporative Emission Control System Vent Control Circuit Open",
    },
    {
        id: "P0449",
        value: "Evaporative Emission Control System Vent Control Circuit Shorted",
    },
    {
        id: "P0450",
        value: "Evaporative Emission Control System Vent Valve/Solenoid Circuit Malfunction",
    },
    {
        id: "P0451",
        value: "Evaporative Emission Control System Pressure Sensor Malfunction",
    },
    {
        id: "P0452",
        value: "Evaporative Emission Control System Pressure Sensor Range/Performance",
    },
    {
        id: "P0453",
        value: "Evaporative Emission Control System Pressure Sensor Low Input",
    },
    {
        id: "P0454",
        value: "Evaporative Emission Control System Pressure Sensor High Input",
    },
    {
        id: "P0455",
        value: "Evaporative Emission Control System Pressure Sensor Intermittent",
    },
    {
        id: "P0460",
        value: "Evaporative Emission Control System Leak Detected (gross leak)",
    },
    {
        id: "P0461",
        value: "Fuel Level Sensor Circuit Malfunction",
    },
    {
        id: "P0462",
        value: "Fuel Level Sensor Circuit Range/Performance",
    },
    {
        id: "P0463",
        value: "Fuel Level Sensor Circuit Low Input",
    },
    {
        id: "P0464",
        value: "Fuel Level Sensor Circuit High Input",
    },
    {
        id: "P0465",
        value: "Fuel Level Sensor Circuit Intermittent",
    },
    {
        id: "P0466",
        value: "Purge Flow Sensor Circuit Malfunction",
    },
    {
        id: "P0467",
        value: "Purge Flow Sensor Circuit Range/Performance",
    },
    {
        id: "P0468",
        value: "Purge Flow Sensor Circuit Low Input",
    },
    {
        id: "P0469",
        value: "Purge Flow Sensor Circuit High Input",
    },
    {
        id: "P0470",
        value: "Purge Flow Sensor Circuit Intermittent",
    },
    {
        id: "P0471",
        value: "Exhaust Pressure Sensor Malfunction",
    },
    {
        id: "P0472",
        value: "Exhaust Pressure Sensor Range/Performance",
    },
    {
        id: "P0473",
        value: "Exhaust Pressure Sensor Low",
    },
    {
        id: "P0474",
        value: "Exhaust Pressure Sensor High",
    },
    {
        id: "P0475",
        value: "Exhaust Pressure Sensor Intermittent",
    },
    {
        id: "P0476",
        value: "Exhaust Pressure Control Valve Malfunction",
    },
    {
        id: "P0477",
        value: "Exhaust Pressure Control Valve Range/Performance",
    },
    {
        id: "P0478",
        value: "Exhaust Pressure Control Valve Low",
    },
    {
        id: "P0479",
        value: "Exhaust Pressure Control Valve High",
    },
    {
        id: "P0480",
        value: "Exhaust Pressure Control Valve Intermittent",
    },
    {
        id: "P0481",
        value: "Cooling Fan 1 Control Circuit Malfunction",
    },
    {
        id: "P0482",
        value: "Cooling Fan 2 Control Circuit Malfunction",
    },
    {
        id: "P0483",
        value: "Cooling Fan 3 Control Circuit Malfunction",
    },
    {
        id: "P0484",
        value: "Cooling Fan Rationality Check Malfunction",
    },
    {
        id: "P0485",
        value: "Cooling Fan Circuit Over Current",
    },
    {
        id: "P0500",
        value: "Cooling Fan Power/Ground Circuit Malfunction",
    },
    {
        id: "P0501",
        value: "Vehicle Speed Sensor Malfunction",
    },
    {
        id: "P0502",
        value: "Vehicle Speed Sensor Range/Performance",
    },
    {
        id: "P0503",
        value: "Vehicle Speed Sensor Low Input",
    },
    {
        id: "P0505",
        value: "Vehicle Speed Sensor Intermittent/Erratic/High",
    },
    {
        id: "P0506",
        value: "Idle Control System Malfunction",
    },
    {
        id: "P0507",
        value: "Idle Control System RPM Lower Than Expected",
    },
    {
        id: "P0510",
        value: "Idle Control System RPM Higher Than Expected",
    },
    {
        id: "P0520",
        value: "Closed Throttle Position Switch Malfunction",
    },
    {
        id: "P0521",
        value: "Engine Oil Pressure Sensor/Switch Circuit Malfunction",
    },
    {
        id: "P0522",
        value: "Engine Oil Pressure Sensor/Switch Circuit Range/Performance",
    },
    {
        id: "P0523",
        value: "Engine Oil Pressure Sensor/Switch Circuit Low Voltage",
    },
    {
        id: "P0530",
        value: "Engine Oil Pressure Sensor/Switch Circuit High Voltage",
    },
    {
        id: "P0531",
        value: "A/C Refrigerant Pressure Sensor Circuit Malfunction",
    },
    {
        id: "P0532",
        value: "A/C Refrigerant Pressure Sensor Circuit Range/Performance",
    },
    {
        id: "P0533",
        value: "A/C Refrigerant Pressure Sensor Circuit Low Input",
    },
    {
        id: "P0534",
        value: "A/C Refrigerant Pressure Sensor Circuit High Input",
    },
    {
        id: "P0550",
        value: "Air Conditioner Refrigerant Charge Loss",
    },
    {
        id: "P0551",
        value: "Power Steering Pressure Sensor Circuit Malfunction",
    },
    {
        id: "P0552",
        value: "Power Steering Pressure Sensor Circuit Range/Performance",
    },
    {
        id: "P0553",
        value: "Power Steering Pressure Sensor Circuit Low Input",
    },
    {
        id: "P0554",
        value: "Power Steering Pressure Sensor Circuit High Input",
    },
    {
        id: "P0560",
        value: "Power Steering Pressure Sensor Circuit Intermittent",
    },
    {
        id: "P0561",
        value: "System Voltage Malfunction",
    },
    {
        id: "P0562",
        value: "System Voltage Unstable",
    },
    {
        id: "P0563",
        value: "A/C pressure sensor low voltage(Chrysler)",
    },
    {
        id: "P0565",
        value: "System Voltage High",
    },
    {
        id: "P0566",
        value: "Cruise Control On Signal Malfunction",
    },
    {
        id: "P0567",
        value: "Cruise Control Off Signal Malfunction",
    },
    {
        id: "P0568",
        value: "Cruise Control Resume Signal Malfunction",
    },
    {
        id: "P0569",
        value: "Cruise Control Set Signal Malfunction",
    },
    {
        id: "P0570",
        value: "Cruise Control Coast Signal Malfunction",
    },
    {
        id: "P0571",
        value: "Cruise Control Accel Signal Malfunction",
    },
    {
        id: "P0572",
        value: "Cruise Control/Brake Switch A Circuit Malfunction",
    },
    {
        id: "P0573",
        value: "Cruise Control/Brake Switch A Circuit Low",
    },
    {
        id: "P0574",
        value: "Cruise Control/Brake Switch A Circuit High",
    },
    {
        id: "P0575",
        value: "Cruise Control Related Malfunction",
    },
    {
        id: "P0576",
        value: "Cruise Control Related Malfunction",
    },
    {
        id: "P0578",
        value: "Cruise Control Related Malfunction",
    },
    {
        id: "P0579",
        value: "Cruise Control Related Malfunction",
    },
    {
        id: "P0580",
        value: "Cruise Control Related Malfunction",
    },
    {
        id: "P0600",
        value: "Cruise Control Related Malfunction",
    },
    {
        id: "P0601",
        value: "Serial Communication Link Malfunction",
    },
    {
        id: "P0602",
        value: "Control Module Read Only Memory(ROM)",
    },
    {
        id: "P0603",
        value: "Control Module Programming Error",
    },
    {
        id: "P0604",
        value: "Internal Control Module Keep Alive Memory (KAM) Error",
    },
    {
        id: "P0605",
        value: "Internal Control Module Random Access Memory (RAM) Error",
    },
    {
        id: "P0606",
        value: "Internal Control Module Read Only Memory (ROM) Error",
    },
    {
        id: "P0608",
        value: "PCM Processor Fault",
    },
    {
        id: "P0609",
        value: 'Control Module VSS Output "A" Malfunction',
    },
    {
        id: "P0620",
        value: 'Control Module VSS Output "B" Malfunction',
    },
    {
        id: "P0621",
        value: "Generator Control Circuit Malfunction",
    },
    {
        id: "P0622",
        value: 'Generator Lamp "L" Control Circuit Malfunction',
    },
    {
        id: "P0650",
        value: 'Generator Field "F" Control Circuit Malfunction',
    },
    {
        id: "P0654",
        value: "Malfunction Indicator Lamp (MIL) Control Circuit Malfunction",
    },
    {
        id: "P0655",
        value: "Engine RPM Output Circuit Malfunction",
    },
    {
        id: "P0656",
        value: "Engine Hot Lamp Output Control Circuit Malfucntion",
    },
    {
        id: "P0700",
        value: "Fuel Level Output Circuit Malfunction",
    },
    {
        id: "P0701",
        value: "Transmission Control System Malfunction",
    },
    {
        id: "P0702",
        value: "Transmission Control System Range/Performance",
    },
    {
        id: "P0703",
        value: "Transmission Control System Electrical",
    },
    {
        id: "P0704",
        value: "Torque Converter/Brake Switch B Circuit Malfunction",
    },
    {
        id: "P0705",
        value: "Clutch Switch Input Circuit Malfunction",
    },
    {
        id: "P0706",
        value: "Transmission Range Sensor Circuit malfunction (PRNDL Input)",
    },
    {
        id: "P0707",
        value: "Transmission Range Sensor Circuit Range/Performance",
    },
    {
        id: "P0708",
        value: "Transmission Range Sensor Circuit Low Input",
    },
    {
        id: "P0709",
        value: "Transmission Range Sensor Circuit High Input",
    },
    {
        id: "P0710",
        value: "Transmission Range Sensor Circuit Intermittent",
    },
    {
        id: "P0711",
        value: "Transmission Fluid Temperature Sensor Circuit Malfunction",
    },
    {
        id: "P0712",
        value: "Transmission Fluid Temperature Sensor Circuit Range/Performance",
    },
    {
        id: "P0713",
        value: "Transmission Fluid Temperature Sensor Circuit Low Input",
    },
    {
        id: "P0714",
        value: "Transmission Fluid Temperature Sensor Circuit High Input",
    },
    {
        id: "P0715",
        value: "Transmission Fluid Temperature Sensor Circuit Intermittent",
    },
    {
        id: "P0716",
        value: "Input/Turbine Speed Sensor Circuit Malfunction",
    },
    {
        id: "P0717",
        value: "Input/Turbine Speed Sensor Circuit Range/Performance",
    },
    {
        id: "P0718",
        value: "Input/Turbine Speed Sensor Circuit No Signal",
    },
    {
        id: "P0719",
        value: "Input/Turbine Speed Sensor Circuit Intermittent",
    },
    {
        id: "P0720",
        value: "Torque Converter/Brake Switch B Circuit Low",
    },
    {
        id: "P0721",
        value: "Output Speed Sensor Circuit Malfunction",
    },
    {
        id: "P0722",
        value: "Output Speed Sensor Range/Performance",
    },
    {
        id: "P0723",
        value: "Output Speed Sensor No Signal",
    },
    {
        id: "P0724",
        value: "Output Speed Sensor Intermittent",
    },
    {
        id: "P0725",
        value: "Torque Converter/Brake Switch B Circuit High",
    },
    {
        id: "P0726",
        value: "Engine Speed input Circuit Malfunction",
    },
    {
        id: "P0727",
        value: "Engine Speed Input Circuit Range/Performance",
    },
    {
        id: "P0728",
        value: "Engine Speed Input Circuit No Signal",
    },
    {
        id: "P0730",
        value: "Engine Speed Input Circuit Intermittent",
    },
    {
        id: "P0731",
        value: "Incorrect Gear Ratio",
    },
    {
        id: "P0732",
        value: "Gear 1 Incorrect ratio",
    },
    {
        id: "P0733",
        value: "Gear 2 Incorrect ratio",
    },
    {
        id: "P0734",
        value: "Gear 3 Incorrect ratio",
    },
    {
        id: "P0735",
        value: "Gear 4 Incorrect ratio",
    },
    {
        id: "P0736",
        value: "Gear 5 Incorrect ratio",
    },
    {
        id: "P0740",
        value: "Reverse incorrect gear ratio",
    },
    {
        id: "P0741",
        value: "Torque Converter Clutch Circuit Malfuction",
    },
    {
        id: "P0742",
        value: "Torque Converter Clutch Circuit Performance or Stuck Off",
    },
    {
        id: "P0743",
        value: "Torque Converter Clutch Circuit Stuck On",
    },
    {
        id: "P0744",
        value: "Torque Converter Clutch Circuit Electrical",
    },
    {
        id: "P0745",
        value: "Torque Converter Clutch Circuit Intermittent",
    },
    {
        id: "P0746",
        value: "Pressure Control Solenoid Malfunction",
    },
    {
        id: "P0747",
        value: "Pressure Control Solenoid Performance or Stuck Off",
    },
    {
        id: "P0748",
        value: "Pressure Control Solenoid Stuck On",
    },
    {
        id: "P0749",
        value: "Pressure Control Solenoid Electrical",
    },
    {
        id: "P0750",
        value: "Pressure Control Solenoid Intermittent",
    },
    {
        id: "P0751",
        value: "Shift Solenoid A Malfunction",
    },
    {
        id: "P0752",
        value: "Shift Solenoid A Performance or Stuck Off/",
    },
    {
        id: "P0753",
        value: "1-2 Shift Solenoid Valve Performance",
    },
    {
        id: "P0754",
        value: "Shift Solenoid A Stuck On",
    },
    {
        id: "P0755",
        value: "Shift Solenoid A Electrical/",
    },
    {
        id: "P0756",
        value: "1-2 Shift Solenoid Circuit Electrical",
    },
    {
        id: "P0757",
        value: "Shift Solenoid A Intermittent",
    },
    {
        id: "P0758",
        value: "Shift Solenoid B Malfunction",
    },
    {
        id: "P0759",
        value: "Shift Solenoid B Performance or Stuck Off/",
    },
    {
        id: "P0760",
        value: "2-3 Shift Solenoid Valve Performance",
    },
    {
        id: "P0761",
        value: "Shift Solenoid B Stuck On",
    },
    {
        id: "P0762",
        value: "Shift Solenoid B Electrical/ 2-3 Shift Solenoid Circuit Electrical",
    },
    {
        id: "P0763",
        value: "Shift Solenoid B Intermittent",
    },
    {
        id: "P0764",
        value: "Shift Solenoid C Malfunction",
    },
    {
        id: "P0765",
        value: "Shift Solenoid C Performance or Stuck Off",
    },
    {
        id: "P0766",
        value: "Shift Solenoid C Stuck On",
    },
    {
        id: "P0767",
        value: "Shift Solenoid C Electrical",
    },
    {
        id: "P0768",
        value: "Shift Solenoid C Intermittent",
    },
    {
        id: "P0769",
        value: "Shift Solenoid D Malfunction",
    },
    {
        id: "P0770",
        value: "Shift Solenoid D Performance or Stuck Off",
    },
    {
        id: "P0771",
        value: "Shift Solenoid D Stuck On",
    },
    {
        id: "P0772",
        value: "Shift Solenoid D Electrical",
    },
    {
        id: "P0773",
        value: "Shift Solenoid D Intermittent",
    },
    {
        id: "P0774",
        value: "Shift Solenoid E Malfunction",
    },
    {
        id: "P0775",
        value: "Shift Solenoid E Performance or Stuck Off",
    },
    {
        id: "P0776",
        value: "Shift Solenoid E Stuck On",
    },
    {
        id: "P0777",
        value: "Shift Solenoid E Electrical",
    },
    {
        id: "P0778",
        value: "Shift Solenoid E Intermittent",
    },
    {
        id: "P0779",
        value: "Pressure Control Solenoid B Malfunction",
    },
    {
        id: "P0780",
        value: "Pressure Control Solenoid B Performance",
    },
    {
        id: "P0781",
        value: "Pressure Control Solenoid B Stuck On",
    },
    {
        id: "P0782",
        value: "Pressure Control Solenoid B Electrical",
    },
    {
        id: "P0783",
        value: "Pressure Control Solenoid B Intermittent",
    },
    {
        id: "P0784",
        value: "Shift Malfunction",
    },
    {
        id: "P0785",
        value: "1-2 Shift Malfunction",
    },
    {
        id: "P0786",
        value: "2-3 Shift Malfunction",
    },
    {
        id: "P0787",
        value: "3-4 Shift Malfunction",
    },
    {
        id: "P0788",
        value: "4-5 Shift Malfunction",
    },
    {
        id: "P0789",
        value: "Shift/Timing Solenoid Malfunction/ 3-2 Shift Solenoid Circuit Electrical",
    },
    {
        id: "P0790",
        value: "Shift/Timing Solenoid Range/Performance",
    },
    {
        id: "P0801",
        value: "Shift/Timing Solenoid Low",
    },
    {
        id: "P0803",
        value: "Shift/Timing Solenoid High",
    },
    {
        id: "P0804",
        value: "Shift/Timing Solenoid Intermittent",
    },
    {
        id: "P1100",
        value: "Normal/Performance Switch Circuit Malfunction",
    },
    {
        id: "P1101",
        value: "Reverse Inhibit Control Circuit Malfunction",
    },
    {
        id: "P1102",
        value: "1-4 Upshift (Skip Shift) Solenoid Control Circuit Malfunction",
    },
    {
        id: "P1103",
        value: "1-4 Upshift (Skip Shift) Lamp Control Circuit Malfunction",
    },
    {
        id: "P1104",
        value: "MAF Sensor Intermittent/ Check of all OBDII Systems Not Complete",
    },
    {
        id: "P1105",
        value: "MAF Sensor Out Of Self Test Range./",
    },
    {
        id: "P1106",
        value: "KOER Not Able To Complete  KOER Aborted",
    },
    {
        id: "P1107",
        value: "MAF Sensor In Range But Lower Than Expected",
    },
    {
        id: "P1108",
        value: "MAF Sensor In Range But Higher Than Expected",
    },
    {
        id: "P1109",
        value: "MAF Ground Malfunction",
    },
    {
        id: "P1110",
        value: "Dual Alternator Upper Fault",
    },
    {
        id: "P1111",
        value: "Dual Alternator Lower Fault/ Manifold Absolute Pressure (MAP) Sensor Circuit Intermittent High Voltage",
    },
    {
        id: "P1112",
        value: "Dual Alternator Lower Circuit Malfunction/ Manifold Absolute Pressure (MAP) Sensor Circuit Intermittent Low Voltage",
    },
    {
        id: "P1113",
        value: "Dual Alternator Battery Lamp Circuit Malfunction",
    },
    {
        id: "P1114",
        value: "IAT - B Sensor Intermittent",
    },
    {
        id: "P1115",
        value: "IAT Sensor (D/C) Open/Short",
    },
    {
        id: "P1116",
        value: "Intake Air Temperature (IAT) Sensor Circuit Intermittent High Voltage",
    },
    {
        id: "P1117",
        value: "Intake Air Temperature (IAT) Sensor Circuit Intermittent Low Voltage",
    },
    {
        id: "P1118",
        value: "IAT Sensor Open/Short",
    },
    {
        id: "P1119",
        value: "Engine Coolant Temperature (ECT) Sensor Circuit Intermittent Low Voltage/IAT - B Circuit Low Input",
    },
    {
        id: "P1120",
        value: "Engine Coolant Temperature (ECT) Sensor Circuit Intermittent High Voltage/IAT - B Circuit High Input",
    },
    {
        id: "P1121",
        value: "Engine Coolant sensor out of range/ECT Sensor Out Of Self Test Range",
    },
    {
        id: "P1122",
        value: "Engine Coolant Sensor intermittent/ECT Sensor Intermittent",
    },
    {
        id: "P1123",
        value: "Manifold Absolute Temperature Circuit Low Input",
    },
    {
        id: "P1124",
        value: "Manifold Absolute Temperature Circuit High Input",
    },
    {
        id: "P1125",
        value: "Throttle position sensor out of range",
    },
    {
        id: "P1126",
        value: "Throttle Position (TP) Sensor Circuit Intermittent High Voltage",
    },
    {
        id: "P1127",
        value: "Throttle Position (TP) Sensor Circuit Intermittent Low Voltage",
    },
    {
        id: "P1128",
        value: "Throttle Position Sensor In Range But Higher Than Expected",
    },
    {
        id: "P1129",
        value: "Throttle Position Sensor Out Of Self Test Range",
    },
    {
        id: "P1130",
        value: "Throttle position sensor intermittent",
    },
    {
        id: "P1131",
        value: "Throttle Position (Narrow Range) Sensor Circuit Malfunction",
    },
    {
        id: "P1132",
        value: "Exhaust Not Warm",
    },
    {
        id: "P1133",
        value: "Upstream Heated O2 Sensors Swapped",
    },
    {
        id: "P1134",
        value: "Downstream Heated O2 Sensors Swapped",
    },
    {
        id: "P1135",
        value: "Lack Of HO2S Switch - Adaptive Fuel At Limit",
    },
    {
        id: "P1136",
        value: "Lack Of HO2S Switch - Sensor Indicates Lean",
    },
    {
        id: "P1137",
        value: "Lack Of HO2S Switch - Sensor Indicates Rich",
    },
    {
        id: "P1138",
        value: "HO2S Insufficient Switching Sensor 1",
    },
    {
        id: "P1139",
        value: "HO2S Transition Time Ratio Sensor 1",
    },
    {
        id: "P1140",
        value: "Pedal Position Sensor A Circuit Intermittent",
    },
    {
        id: "P1141",
        value: "Fan Control Circuit Malfunction",
    },
    {
        id: "P1142",
        value: "Lack Of HO2S Switch - Sensor Indicates Lean",
    },
    {
        id: "P1143",
        value: "Lack Of HO2S12 Switch - Sensor Indicates Rich",
    },
    {
        id: "P1144",
        value: "Water In Fuel Indicator Circuit Malfunction",
    },
    {
        id: "P1150",
        value: "Water In Fuel Condition",
    },
    {
        id: "P1151",
        value: "Fuel Restriction Indicator Circuit Malfunction",
    },
    {
        id: "P1152",
        value: "Fuel Restriction Condition",
    },
    {
        id: "P1153",
        value: "Air Assist Control Valve Range/Performance",
    },
    {
        id: "P1154",
        value: "Air Assist Control Valve Circuit Malfunction",
    },
    {
        id: "P1155",
        value: "Lack Of HO2S21 Switch - Adaptive Fuel At Limit",
    },
    {
        id: "P1156",
        value: "Lack Of HO2S21 Switch - Sensor Indicates Lean",
    },
    {
        id: "P1157",
        value: "Lack Of HO2S21 Switch - Sensor Indicates Rich",
    },
    {
        id: "P1158",
        value: "Bank 2 Fuel Control Shifted Lean",
    },
    {
        id: "P1159",
        value: "Bank 2 Fuel Control Shifted Rich",
    },
    {
        id: "P1167",
        value: "Alternative Fuel Controller",
    },
    {
        id: "P1168",
        value: "Fuel Select Switch Malfunction",
    },
    {
        id: "P1169",
        value: "Lack Of HO2S22 Switch - Sensor Indicates Lean",
    },
    {
        id: "P1170",
        value: "Lack Of HO2S22 Switch - Sensor Indicates Rich",
    },
    {
        id: "P1171",
        value: "Fuel Stepper Motor Malfunction",
    },
    {
        id: "P1172",
        value: "Invalid Test",
    },
    {
        id: "P1173",
        value: "Fuel Rail Sensor In-Range Low Failure",
    },
    {
        id: "P1174",
        value: "Fuel Rail Sensor In-Range High Failure",
    },
    {
        id: "P1175",
        value: "ESO - Engine Shut Off Solenoid Fault",
    },
    {
        id: "P1176",
        value: "Rotor Sensor Fault",
    },
    {
        id: "P1177",
        value: "Rotor Control Fault",
    },
    {
        id: "P1178",
        value: "Rotor Calibration Fault",
    },
    {
        id: "P1180",
        value: "Cam Sensor Fault",
    },
    {
        id: "P1181",
        value: "Cam Control Fault",
    },
    {
        id: "P1182",
        value: "Cam Calibration Fault",
    },
    {
        id: "P1183",
        value: "Synchronization Fault",
    },
    {
        id: "P1184",
        value: "( open )",
    },
    {
        id: "P1185",
        value: "Fuel Delivery System Malfunction - Low",
    },
    {
        id: "P1186",
        value: "Fuel Delivery System Malfunction - High",
    },
    {
        id: "P1187",
        value: "Fuel Shut Off Solenoid Malfunction",
    },
    {
        id: "P1188",
        value: "Engine Oil Temperature Circuit Malfunction",
    },
    {
        id: "P1189",
        value: "Engine Oil Temperature Out Of Self Test Range",
    },
    {
        id: "P1190",
        value: "FTS High - Fuel Pump Temperature Sensor High",
    },
    {
        id: "P1191",
        value: "FTS Low - Fuel Pump Temperature Sensor Low",
    },
    {
        id: "P1192",
        value: "Variant Selection",
    },
    {
        id: "P1193",
        value: "Calibration Memory Fault",
    },
    {
        id: "P1194",
        value: "Pump Speed Signal Fault",
    },
    {
        id: "P1195",
        value: "Calibration Resistor Out Of Range",
    },
    {
        id: "P1196",
        value: "Key Line Voltage",
    },
    {
        id: "P1197",
        value: "Voltage External",
    },
    {
        id: "P1198",
        value: "EGR Drive Overcurrent",
    },
    {
        id: "P1199",
        value: "ECU A/D Converter",
    },
    {
        id: "P1200",
        value: "SCP HBCC Failed To Initialize",
    },
    {
        id: "P1201",
        value: "Key Off Voltage High",
    },
    {
        id: "P1202",
        value: "Key Off Voltage Low",
    },
    {
        id: "P1203",
        value: "Pump Rotor Control Underfueling",
    },
    {
        id: "P1204",
        value: "Fuel Level Input Circuit Low",
    },
    {
        id: "P1205",
        value: "Injector Control Circuit",
    },
    {
        id: "P1206",
        value: "Injector Circuit Open / Shorted - Cylinder #1",
    },
    {
        id: "P1209",
        value: "Injector Circuit Open / Shorted - Cylinder #2",
    },
    {
        id: "P1210",
        value: "Injector Circuit Open / Shorted - Cylinder #3",
    },
    {
        id: "P1211",
        value: "Injector Circuit Open / Shorted - Cylinder #4",
    },
    {
        id: "P1212",
        value: "Injector Circuit Open / Shorted - Cylinder #5",
    },
    {
        id: "P1213",
        value: "Injector Circuit Open / Shorted - Cylinder #6",
    },
    {
        id: "P1214",
        value: "Injector Control Pressure System Fault",
    },
    {
        id: "P1215",
        value: "Injector Control Pressure Above Expected Level",
    },
    {
        id: "P1216",
        value: "Injector Control Pressure Sensor Above / Below Desired",
    },
    {
        id: "P1217",
        value: "Injector Control Pressure Not Detected During Crank",
    },
    {
        id: "P1218",
        value: "Start Injector Circuit Malfunction",
    },
    {
        id: "P1219",
        value: "Pedal Position Sensor B Circuit Intermittent",
    },
    {
        id: "P1220",
        value: "Pedal Position Sensor C Circuit Low Input",
    },
    {
        id: "P1221",
        value: "Pedal Position Sensor C Circuit High Input",
    },
    {
        id: "P1222",
        value: "Pedal Position Sensor C Circuit Intermittent",
    },
    {
        id: "P1223",
        value: "CID High",
    },
    {
        id: "P1224",
        value: "CID Low",
    },
    {
        id: "P1225",
        value: "Series Throttle Control System Malfunction",
    },
    {
        id: "P1226",
        value: "Traction Control System Malfunction",
    },
    {
        id: "P1227",
        value: "Traction Control Output Circuit Malfunction",
    },
    {
        id: "P1228",
        value: "Pedal Demand Sensor B Circuit High Input",
    },
    {
        id: "P1229",
        value: "Throttle Position Sensor B Out Of Self Test Range",
    },
    {
        id: "P1230",
        value: "Needle Lift Sensor Malfunction",
    },
    {
        id: "P1231",
        value: "Control Sleeve Sensor Malfunction",
    },
    {
        id: "P1232",
        value: "Wastegate Failed Closed (Over Pressure)",
    },
    {
        id: "P1233",
        value: "Wastegate Failed Open (Under Pressure)",
    },
    {
        id: "P1234",
        value: "Intercooler Pump Driver Fault",
    },
    {
        id: "P1235",
        value: "Fuel Pump Low Speed Malfunction",
    },
    {
        id: "P1236",
        value: "Fuel Pump Secondary Circuit Low",
    },
    {
        id: "P1237",
        value: "Fuel Pump Speed Primary Circuit Malfunction",
    },
    {
        id: "P1238",
        value: "Fuel Pump Driver Module Off Line",
    },
    {
        id: "P1239",
        value: "Fuel Pump Driver Module Off Line",
    },
    {
        id: "P1240",
        value: "Fuel Pump Control Out Of Range",
    },
    {
        id: "P1241",
        value: "Fuel Pump Control Out Of Range",
    },
    {
        id: "P1242",
        value: "Fuel Pump Secondary Circuit Malfunction",
    },
    {
        id: "P1243",
        value: "Fuel Pump Secondary Circuit Malfunction",
    },
    {
        id: "P1244",
        value: "Speed Fuel Pump Positive Feed Fault",
    },
    {
        id: "P1245",
        value: "Sensor Power Supply Malfunction",
    },
    {
        id: "P1246",
        value: "Sensor Power Supply Low Input",
    },
    {
        id: "P1247",
        value: "Sensor Power Supply High Input",
    },
    {
        id: "P1248",
        value: "Second Fuel Pump Faulty or Ground Fault",
    },
    {
        id: "P1249",
        value: "Alternator Load Input Failed High",
    },
    {
        id: "P1250",
        value: "Alternator Load Input Failed Low",
    },
    {
        id: "P1251",
        value: "Alternator Load Input Failed",
    },
    {
        id: "P1252",
        value: "Turbo Boost Pressure Low",
    },
    {
        id: "P1253",
        value: "Turbo Boost Pressure Not Detected",
    },
    {
        id: "P1254",
        value: "Wastegate Control Valve Performance",
    },
    {
        id: "P1255",
        value: "PRC Solenoid Circuit Malfunction",
    },
    {
        id: "P1256",
        value: "Air Mixture Solenoid Circuit Malfunction",
    },
    {
        id: "P1257",
        value: "Pedal Correlation PDS1 and LPDS High",
    },
    {
        id: "P1258",
        value: "Pedal Correlation PDS1 and LPDS Low",
    },
    {
        id: "P1259",
        value: "Pedal Correlation PDS2 and LPDS High",
    },
    {
        id: "P1260",
        value: "Pedal Correlation PDS2 and LPDS Low",
    },
    {
        id: "P1261",
        value: "Pedal Correlation PDS1 and HPDS",
    },
    {
        id: "P1262",
        value: "Pedal Correlation PDS2 and HPDS",
    },
    {
        id: "P1263",
        value: "Pedal Correlation PDS1 and PDS2",
    },
    {
        id: "P1264",
        value: "Immobilizer to PCM Signal Error",
    },
    {
        id: "P1265",
        value: "THEFT Detected",
    },
    {
        id: "P1266",
        value: "Cylinder #1 High To Low Side Short",
    },
    {
        id: "P1267",
        value: "Cylinder #2 High To Low Side Short",
    },
    {
        id: "P1268",
        value: "Cylinder #3 High To Low Side Short",
    },
    {
        id: "P1269",
        value: "Cylinder #4 High To Low Side Short",
    },
    {
        id: "P1270",
        value: "Cylinder #5 High To Low Side Short",
    },
    {
        id: "P1271",
        value: "Cylinder #6 High To Low Side Short",
    },
    {
        id: "P1272",
        value: "Cylinder #7 High To Low Side Short",
    },
    {
        id: "P1273",
        value: "Cylinder #8 High To Low Side Short",
    },
    {
        id: "P1274",
        value: "Immobilizer Code Not Programmed",
    },
    {
        id: "P1275",
        value: "Engine RPM Or Speed Limiter Reached",
    },
    {
        id: "P1276",
        value: "Cylinder #1 High To Low Side Open",
    },
    {
        id: "P1277",
        value: "Cylinder #2 High To Low Side Open",
    },
    {
        id: "P1278",
        value: "Cylinder #3 High To Low Side Open",
    },
    {
        id: "P1280",
        value: "Cylinder #4 High To Low Side Open",
    },
    {
        id: "P1281",
        value: "Cylinder #5 High To Low Side Open",
    },
    {
        id: "P1282",
        value: "Cylinder #6 High To Low Side Open",
    },
    {
        id: "P1283",
        value: "Cylinder #7 High To Low Side Open",
    },
    {
        id: "P1284",
        value: "Cylinder #8 High To Low Side Open",
    },
    {
        id: "P1285",
        value: "Injection Control Pressure Out Of Range Low",
    },
    {
        id: "P1286",
        value: "Injection Control Pressure Out Of Range High",
    },
    {
        id: "P1287",
        value: "Excessive Injection Control Pressure",
    },
    {
        id: "P1288",
        value: "IPR Circuit Failure",
    },
    {
        id: "P1289",
        value: "Aborted KOER - ICP Failure",
    },
    {
        id: "P1290",
        value: "Cylinder head over temp sensed",
    },
    {
        id: "P1291",
        value: "Fuel Pulse In Range But Lower Than Expected",
    },
    {
        id: "P1292",
        value: "Fuel Pulse In Range But Higher Than Expected",
    },
    {
        id: "P1293",
        value: "Cylinder Head Temp Sensor Out Of Self Test Range",
    },
    {
        id: "P1294",
        value: "Cylinder Head Temp Sensor High Input",
    },
    {
        id: "P1295",
        value: "Cylinder Head Temp Sensor Low Input",
    },
    {
        id: "P1296",
        value: "Injector High Side Short To GND Or VBATT - Bank 1",
    },
    {
        id: "P1297",
        value: "Injector High Side Short To GND Or VBATT - Bank 2",
    },
    {
        id: "P1298",
        value: "Injector High Side Open - Bank 1",
    },
    {
        id: "P1299",
        value: "Injector High Side Open - Bank 2/Target idle not reached",
    },
    {
        id: "P1300",
        value: "Multi-faults - Bank 1 - With Low Side Shorts",
    },
    {
        id: "P1301",
        value: "Multi-faults - Bank 2 - With Low Side Shorts",
    },
    {
        id: "P1302",
        value: "Injector High Sides Shorted Together",
    },
    {
        id: "P1303",
        value: "IDM Failure",
    },
    {
        id: "P1304",
        value: "Cylinder Head Overtemperature Protection Active",
    },
    {
        id: "P1305",
        value: "Boost Calibration Fault",
    },
    {
        id: "P1306",
        value: "Boost Calibration High",
    },
    {
        id: "P1307",
        value: "Boost Calibration Low",
    },
    {
        id: "P1308",
        value: "EGR Calibration Fault",
    },
    {
        id: "P1309",
        value: "EGR Calibration High",
    },
    {
        id: "P1313",
        value: "EGR Calibration Low",
    },
    {
        id: "P1314",
        value: "Kickdown Relay Pull - In Circuit Fault",
    },
    {
        id: "P1315",
        value: "Kickdown Relay Hold Circuit Fault",
    },
    {
        id: "P1316",
        value: "A/C Clutch Circuit Fault",
    },
    {
        id: "P1317",
        value: "Misfire Monitor AICE Chip Fault",
    },
    {
        id: "P1336",
        value: "Misfire Rate Catalyst Damage Fault - Bank 1",
    },
    {
        id: "P1340",
        value: "Misfire Rate Catalyst Damage Fault - Bank 2",
    },
    {
        id: "P1341",
        value: "Persistent Misfire",
    },
    {
        id: "P1345",
        value: "Injector Circuit / IDM Codes Detected",
    },
    {
        id: "P1346",
        value: "Injector Circuit / IDM Codes Not Updated",
    },
    {
        id: "P1347",
        value: "Crank / Cam Sensor Range / Performance",
    },
    {
        id: "P1348",
        value: "Camshaft Position Sensor B Circuit Malfunction",
    },
    {
        id: "P1349",
        value: "Camshaft Position Sensor B Range / Performance",
    },
    {
        id: "P1350",
        value: "SGC (Cam Position) Sensor Circuit Malfunction/ Crankshaft Position - Camshaft Position Correlation",
    },
    {
        id: "P1351",
        value: "Fuel Level Sensor B Circuit Malfunction",
    },
    {
        id: "P1352",
        value: "Fuel Level Sensor B Range / Performance",
    },
    {
        id: "P1353",
        value: "Fuel Level Sensor B Circuit Low",
    },
    {
        id: "P1354",
        value: "Fuel Level Sensor B Circuit High",
    },
    {
        id: "P1355",
        value: "Fuel Level Sensor B Intermittent/Bypass Line Monitor",
    },
    {
        id: "P1360",
        value: "IDM Input Circuit Malfunction/ Ignition Coil Control Circuit High Voltage",
    },
    {
        id: "P1361",
        value: "Ignition Coil A Primary Circuit Malfunction",
    },
    {
        id: "P1362",
        value: "Ignition Coil B Primary Circuit Malfunction",
    },
    {
        id: "P1363",
        value: "Ignition Coil C Primary Circuit Malfunction",
    },
    {
        id: "P1364",
        value: "Ignition Coil D Primary Circuit Malfunction",
    },
    {
        id: "P1365",
        value: "Ignition Coil A Secondary Circuit Malfunction",
    },
    {
        id: "P1366",
        value: "Ignition Control (IC) Circuit Low Voltage",
    },
    {
        id: "P1367",
        value: "Ignition Coil C Secondary Circuit Malfunction",
    },
    {
        id: "P1368",
        value: "Ignition Coil D Secondary Circuit Malfunction",
    },
    {
        id: "P1369",
        value: "Ignition Coil Primary Circuit Failure",
    },
    {
        id: "P1370",
        value: "Ignition Coil Secondary Circuit Failure",
    },
    {
        id: "P1371",
        value: "Ignition Spare",
    },
    {
        id: "P1372",
        value: "Ignition Spare",
    },
    {
        id: "P1373",
        value: "Ignition Spare",
    },
    {
        id: "P1374",
        value: "Engine Temperature Light Monitor Failure",
    },
    {
        id: "P1375",
        value: "Insufficient RMP Increase During Spark Test",
    },
    {
        id: "P1376",
        value: "Ignition Coil - Cylinder 1 - Early Activation Fault",
    },
    {
        id: "P1380",
        value: "Ignition Coil - Cylinder 2 - Early Activation Fault",
    },
    {
        id: "P1381",
        value: "Ignition Coil - Cylinder 3 - Early Activation Fault",
    },
    {
        id: "P1382",
        value: "Crankshaft Position (CKP)/Ignition Coil - Cylinder 4 - Early Activation Fault",
    },
    {
        id: "P1383",
        value: "Ignition Coil - Cylinder 5 - Early Activation Fault",
    },
    {
        id: "P1384",
        value: "Ignition Coil - Cylinder 6 - Early Activation Fault",
    },
    {
        id: "P1385",
        value: "Misfire Detected - Rough Road Data Not Available",
    },
    {
        id: "P1386",
        value: "Variable Cam Timing Overadvanced (Bank #1)/ Misfire Detected - No Communication with BCM",
    },
    {
        id: "P1387",
        value: "Variable Cam Timing Solenoid #1 Circuit Malfunction",
    },
    {
        id: "P1388",
        value: "Variable Cam Timing Overretarded (Bank #1)",
    },
    {
        id: "P1389",
        value: "VVT Solenoid A Malfunction",
    },
    {
        id: "P1390",
        value: "Variable Cam Timing Solenoid B Malfunction",
    },
    {
        id: "P1391",
        value: "Variable Cam Timing Overadvanced (Bank #2)",
    },
    {
        id: "P1392",
        value: "Variable Cam Timing Solenoid #2 Circuit Malfunction",
    },
    {
        id: "P1393",
        value: "Variable Cam Timing Overretarded (Bank #2)",
    },
    {
        id: "P1394",
        value: "Glow Plug Circuit High Side Low Input",
    },
    {
        id: "P1395",
        value: "Octane Adjust Pin Out Of Self Test Range",
    },
    {
        id: "P1396",
        value: "Glow Plug Circuit Low Input (Bank #1)",
    },
    {
        id: "P1397",
        value: "Glow Plug Circuit High Input (Bank #1)",
    },
    {
        id: "P1398",
        value: "Glow Plug Circuit Low Input (Bank #2)",
    },
    {
        id: "P1399",
        value: "Glow Plug Circuit High Input (Bank #2)",
    },
    {
        id: "P1400",
        value: "Glow Plug Monitor Fault (Bank #1)",
    },
    {
        id: "P1401",
        value: "Glow Plug Monitor Fault (Bank #2)",
    },
    {
        id: "P1402",
        value: "System Voltage Out Of Self Test Range",
    },
    {
        id: "P1403",
        value: "VVT Solenoid B Circuit High Input",
    },
    {
        id: "P1404",
        value: "Glow Plug Circuit High Side",
    },
    {
        id: "P1405",
        value: "DPFE Circuit Low Input",
    },
    {
        id: "P1406",
        value: "DPFE Circuit High Input",
    },
    {
        id: "P1407",
        value: "EGR Metering Orifice Restricted",
    },
    {
        id: "P1408",
        value: "DPFE Sensor Hoses Reversed",
    },
    {
        id: "P1409",
        value: "IAT - B Circuit Malfunction/ Exhaust Gas Recirculation Closed Position Performance",
    },
    {
        id: "P1411",
        value: "DPFE Sensor Upstream Hose Off Or Plugged",
    },
    {
        id: "P1413",
        value: "Exhaust Gas Recirculation (EGR) Position Sensor Performance",
    },
    {
        id: "P1414",
        value: "EGR No Flow Detected",
    },
    {
        id: "P1415",
        value: "EGR Flow Out Of Self Test Range",
    },
    {
        id: "P1416",
        value: "EVR Control Circuit Malfunction",
    },
    {
        id: "P1417",
        value: "SAI System Incorrect Downstream Flow Detected",
    },
    {
        id: "P1418",
        value: "SAI System Monitor Circuit Low Input",
    },
    {
        id: "P1419",
        value: "SAI System Monitor Circuit High Input",
    },
    {
        id: "P1420",
        value: "Air Pump Circuit Malfunction/ (AIR) System Bank 1",
    },
    {
        id: "P1421",
        value: "Port Air Circuit Malfunction/ (AIR) System Bank 2",
    },
    {
        id: "P1422",
        value: "Port Air Relief Circuit Malfunction",
    },
    {
        id: "P1423",
        value: "Split Air #1 Circuit Malfunction",
    },
    {
        id: "P1424",
        value: "Split Air #2 Circuit Malfunction",
    },
    {
        id: "P1425",
        value: "Catalyst Temperature Sensor Failure",
    },
    {
        id: "P1426",
        value: "Catalyst Damage",
    },
    {
        id: "P1427",
        value: "EGI Temperature Sensor Failure",
    },
    {
        id: "P1428",
        value: "EGI Functionality Test Failed",
    },
    {
        id: "P1429",
        value: "EGI Glow Plug Primary Failure",
    },
    {
        id: "P1430",
        value: "EGI Glow Plug Secondary Failure",
    },
    {
        id: "P1433",
        value: "EGI Mini - MAF Failed Out Of Range",
    },
    {
        id: "P1434",
        value: "EGI Mini - MAF Failed Short Circuit",
    },
    {
        id: "P1435",
        value: "EGI Mini - MAF Failed Open Circuit",
    },
    {
        id: "P1436",
        value: "Electric Air Pump Primary Failure",
    },
    {
        id: "P1437",
        value: "Electric Air Pump Secondary Failure",
    },
    {
        id: "P1438",
        value: "A/C Refrigerant Temperature Circuit Low",
    },
    {
        id: "P1439",
        value: "A/C Refrigerant Temperature Circuit High",
    },
    {
        id: "P1440",
        value: "A/C Refrigerant Temperature Circuit Range/Performance",
    },
    {
        id: "P1441",
        value: "A/C Evaporator Air Temperature Circuit Low",
    },
    {
        id: "P1442",
        value: "A/C Evaporator Air Temperature Circuit Range/Performance",
    },
    {
        id: "P1443",
        value: "Floor Temperature Switch Circuit Malfunction",
    },
    {
        id: "P1444",
        value: "Purge Valve Stuck Open",
    },
    {
        id: "P1445",
        value: "Evaporative Emission (EVAP) System Flow During Non-Purge Chevrolet Only",
    },
    {
        id: "P1446",
        value: "Evaporative Emission (EVAP) System Flow During Non-Purge Oldsmobile Only",
    },
    {
        id: "P1447",
        value: "Evaporative Emission Control System Leak Detected",
    },
    {
        id: "P1448",
        value: "Evaporative Emission Control System Control Valve",
    },
    {
        id: "P1449",
        value: "Purge Flow Sensor Circuit Low Input",
    },
    {
        id: "P1450",
        value: "Purge Flow Sensor Circuit High Input",
    },
    {
        id: "P1451",
        value: "Evaporative Vac Solenoid Circuit Malfunction",
    },
    {
        id: "P1452",
        value: "ELC System Closure Valve Flow Fault",
    },
    {
        id: "P1453",
        value: "ELC System 2 Fault",
    },
    {
        id: "P1454",
        value: "Evaporative Check Solenoid Circuit Malfunction",
    },
    {
        id: "P1455",
        value: "Unable To Bleed Up Fuel Tank Vacuum",
    },
    {
        id: "P1456",
        value: "Evap  Emission Control Sys Vent Control Valve Circuit",
    },
    {
        id: "P1457",
        value: "Unable To Bleed - Up Vacuum in Tank",
    },
    {
        id: "P1460",
        value: "Fuel Tank Pressure Relief Valve Malfunction",
    },
    {
        id: "P1461",
        value: "Evaporative System Vacuum Test Malfunction",
    },
    {
        id: "P1462",
        value: "Evap  Emission Control Sys  Leak Detected (Gross Leak/No Flow)",
    },
    {
        id: "P1463",
        value: "Fuel Tank Temperature Sensor Circuit Malfunction",
    },
    {
        id: "P1464",
        value: "Unable To Pull Vacuum In Tank",
    },
    {
        id: "P1465",
        value: "Wide open throttle A/C cutoff relay circuit",
    },
    {
        id: "P1466",
        value: "A/C pressure sensor circuit voltage low",
    },
    {
        id: "P1467",
        value: "A/C pressure sensor circuit voltage high",
    },
    {
        id: "P1468",
        value: "A/C Pressure Sensor Insufficient Pressure Change",
    },
    {
        id: "P1469",
        value: "A/C Demand Out of Self Test Range",
    },
    {
        id: "P1470",
        value: "A/C Relay Circuit Malfunction",
    },
    {
        id: "P1471",
        value: "A/C Refrigerant Temperature Sensor/Circuit Malfunction",
    },
    {
        id: "P1472",
        value: "A/C Compressor Temperature Sensor Malfunction",
    },
    {
        id: "P1473",
        value: "SSPOD Open Circuit or Closed Circuit Fault",
    },
    {
        id: "P1474",
        value: "Low A/C Cycling Period",
    },
    {
        id: "P1475",
        value: "A/C Cycling Period Too Short",
    },
    {
        id: "P1476",
        value: "Electrodrive Fan 1 Operational Failure (Driver Side)",
    },
    {
        id: "P1477",
        value: "Electrodrive Fan 2 Operational Failure (Passenger Side)",
    },
    {
        id: "P1478",
        value: "Fan Secondary High With Fan(s) Off",
    },
    {
        id: "P1479",
        value: "Low Fan Control Primary Circuit Malfunction",
    },
    {
        id: "P1480",
        value: "Fan Relay (Low) Circuit Malfunction",
    },
    {
        id: "P1481",
        value: "Fan Relay (High) Circuit Malfunction",
    },
    {
        id: "P1482",
        value: "Additional Fan Relay Circuit Malfunction",
    },
    {
        id: "P1483",
        value: "Cooling Fan Driver Fault",
    },
    {
        id: "P1484",
        value: "High Fan Control Primary Circuit Malfunction",
    },
    {
        id: "P1485",
        value: "Fan Secondary Low with Low Fan On",
    },
    {
        id: "P1486",
        value: "Fan Secondary Low With High Fan On",
    },
    {
        id: "P1487",
        value: "SCP",
    },
    {
        id: "P1490",
        value: "Power To Fan Circuit Overcurrent",
    },
    {
        id: "P1491",
        value: "Open Power To Ground VCRM",
    },
    {
        id: "P1492",
        value: "EGRV Circuit Malfunction",
    },
    {
        id: "P1493",
        value: "EGRA Circuit Malfunction",
    },
    {
        id: "P1494",
        value: "EGRCHK Solenoid Circuit Malfunction",
    },
    {
        id: "P1495",
        value: "Secondary Air Relief Solenoid Circuit Malfunction",
    },
    {
        id: "P1500",
        value: "Secondary Switch Solenoid Circuit Malfunction",
    },
    {
        id: "P1501",
        value: "APLSOL Solenoid Circuit Malfunction",
    },
    {
        id: "P1502",
        value: "RCNT Solenoid Circuit Malfunction",
    },
    {
        id: "P1503",
        value: "SPCUT Solenoid Circuit Malfunction",
    },
    {
        id: "P1504",
        value: "TCSPL Solenoid Circuit Malfunction",
    },
    {
        id: "P1505",
        value: "Vehicle Speed Sensor Intermittent",
    },
    {
        id: "P1506",
        value: "Vehicle Speed Sensor Out Of Self Test Range",
    },
    {
        id: "P1507",
        value: "Vehicle Speed Sensor Intermittent Malfunction",
    },
    {
        id: "P1508",
        value: "Auxillary Speed Sensor Fault",
    },
    {
        id: "P1509",
        value: "Idle Air Control Circuit Malfunction",
    },
    {
        id: "P1510",
        value: "Idle Air Control System At Adaptive Clip",
    },
    {
        id: "P1511",
        value: "Idle Air Control Overspeed Error",
    },
    {
        id: "P1512",
        value: "Idle Air Control Underspeed Error",
    },
    {
        id: "P1513",
        value: "Idle Control System Circuit Open",
    },
    {
        id: "P1514",
        value: "Idle Control System Circuit Shorted",
    },
    {
        id: "P1515",
        value: "Idle Signal Circuit Malfunction",
    },
    {
        id: "P1516",
        value: "Idle Switch (Electric Control Throttle) Circuit Malfunction",
    },
    {
        id: "P1517",
        value: "Intake Manifold Runner Control (Bank 1) Stuck Closed",
    },
    {
        id: "P1518",
        value: "Intake Manifold Runner Control (Bank 2) Stuck Closed",
    },
    {
        id: "P1519",
        value: "High Load Neutral/Drive Fault",
    },
    {
        id: "P1520",
        value: "Electric Current Circuit Malfunction",
    },
    {
        id: "P1521",
        value: "IMRC Input Error (Bank 1)",
    },
    {
        id: "P1522",
        value: "IMRC Input Error (Bank 2)",
    },
    {
        id: "P1523",
        value: "Intake Manifold Runner Control (Stuck Open)",
    },
    {
        id: "P1524",
        value: "Intake Manifold Runner Control (Stuck Closed)",
    },
    {
        id: "P1525",
        value: "Intake Manifold Runner Control Circuit Malfunction",
    },
    {
        id: "P1526",
        value: "Variable Intake Solenoid #1 Circuit Malfunction",
    },
    {
        id: "P1527",
        value: "Variable Intake Solenoid #2 Circuit Malfunction",
    },
    {
        id: "P1528",
        value: "IVC Solenoid Circuit Malfunction",
    },
    {
        id: "P1529",
        value: "Variable Intake Solenoid System",
    },
    {
        id: "P1530",
        value: "Air Bypass Valve System",
    },
    {
        id: "P1531",
        value: "Air Bypass System",
    },
    {
        id: "P1532",
        value: "Accelerate Warmup Solenoid Circuit Malfunction",
    },
    {
        id: "P1533",
        value: "Subsidiary Throttle Valve Solenoid Circuit Malfunction",
    },
    {
        id: "P1534",
        value: "SCAIR Solenoid Circuit Malfunction",
    },
    {
        id: "P1535",
        value: "A/C Clutch Circuit Malfunction",
    },
    {
        id: "P1536",
        value: "Invalid Test - Accelerator Pedal Movement",
    },
    {
        id: "P1537",
        value: "IMCC Circuit Malfunction",
    },
    {
        id: "P1538",
        value: "AAI Circuit Malfunction",
    },
    {
        id: "P1539",
        value: "Inertia Switch Activated",
    },
    {
        id: "P1540",
        value: "Blower Fan Speed Circuit Range/Performance",
    },
    {
        id: "P1549",
        value: "Parking Brake Switch Circuit Failure",
    },
    {
        id: "P1550",
        value: "Intake Manifold Runner Control (Bank 1) Stuck Open",
    },
    {
        id: "P1565",
        value: "Intake Manifold Runner Control (Bank 2) Stuck Open",
    },
    {
        id: "P1566",
        value: "Power To A/C Clutch Circuit Overcurrent",
    },
    {
        id: "P1567",
        value: "Air Bypass Valve Circuit Malfunction",
    },
    {
        id: "P1568",
        value: "IMCC Circuit Malfunction",
    },
    {
        id: "P1571",
        value: "PSPS Out Of Self Test Range",
    },
    {
        id: "P1572",
        value: "Speed Control Command Switch Out of Range High",
    },
    {
        id: "P1573",
        value: "Speed Control Command Switch Out of Range Low",
    },
    {
        id: "P1574",
        value: "Speed Control Output Circuit Continuity",
    },
    {
        id: "P1575",
        value: "Speed Control Unable to Hold Speed",
    },
    {
        id: "P1576",
        value: "Brake Switch Malfunction",
    },
    {
        id: "P1577",
        value: "Brake Pedal Switch Circuit Malfunction",
    },
    {
        id: "P1578",
        value: "Throttle Position Not Available",
    },
    {
        id: "P1579",
        value: "Throttle Position Sensor Disagreement btwn Sensors",
    },
    {
        id: "P1580",
        value: "Pedal Position Out of Self Test Range",
    },
    {
        id: "P1581",
        value: "Pedal Position Not Available",
    },
    {
        id: "P1582",
        value: "Pedal Position Sensor Disagreement btwn Sensors",
    },
    {
        id: "P1583",
        value: "ETC Power Less Than Demand",
    },
    {
        id: "P1584",
        value: "ETC In Power Limiting Mode",
    },
    {
        id: "P1585",
        value: "Electronic Throttle Monitor PCM Override",
    },
    {
        id: "P1586",
        value: "Electronic Throttle Monitor Malfunction",
    },
    {
        id: "P1587",
        value: "Electronic Throttle Monitor Data Available",
    },
    {
        id: "P1588",
        value: "Electronic Throttle Monitor Cruise Disable",
    },
    {
        id: "P1589",
        value: "TCU Detected IPE Circuit Malfunction",
    },
    {
        id: "P1600",
        value: "Throttle Control Unit Malfunction",
    },
    {
        id: "P1601",
        value: "Throttle Control Unit Throttle Position Malfunction",
    },
    {
        id: "P1602",
        value: "Throttle Control Unit Modulated Command Malfunction",
    },
    {
        id: "P1603",
        value: "Throttle Control Unit Detected Loss of Return Spring",
    },
    {
        id: "P1604",
        value: "TCU Unable To Control Desired Throttle Angle",
    },
    {
        id: "P1605",
        value: "Loss of KAM Power; Open Circuit",
    },
    {
        id: "P1606",
        value: "ECM/TCM Serial Communication Error",
    },
    {
        id: "P1607",
        value: "Immobilizer/ECM Communication Error",
    },
    {
        id: "P1608",
        value: "EEPROM Malfunction",
    },
    {
        id: "P1609",
        value: "Code Word Unregestered",
    },
    {
        id: "P1610",
        value: "Keep Alive Memory Test Failure",
    },
    {
        id: "P1611",
        value: "ECM Control Relay O/P Circuit Malfunction",
    },
    {
        id: "P1612",
        value: "MIL O/P Circuit Malfunction",
    },
    {
        id: "P1613",
        value: "Internal ECM Malfunction",
    },
    {
        id: "P1614",
        value: "Diagnostic Lamp Driver Fault",
    },
    {
        id: "P1615",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1616",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1617",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1618",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1619",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1620",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1621",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1622",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1623",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1624",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1625",
        value: "SBDS Interactive Codes",
    },
    {
        id: "P1626",
        value: "Control Module Long Term Memory Performance/ Immobilizer Code Words Do Not Match",
    },
    {
        id: "P1627",
        value: "Immobilizer ID Does Not Match",
    },
    {
        id: "P1628",
        value: "Immobilizer Code Word/ID Number Write Failure",
    },
    {
        id: "P1629",
        value: "Anti Theft System",
    },
    {
        id: "P1630",
        value: "B+ Supply To VCRM Fan Circuit Malfunction",
    },
    {
        id: "P1631",
        value: "Theft Deterrent Fuel Enable Signal Not Received/ B+ Supply To VCRM A/C Circuit Malfunction",
    },
    {
        id: "P1632",
        value: "Module Supply Voltage Out Of Range",
    },
    {
        id: "P1633",
        value: "Module Ignition Supply Input Malfunction",
    },
    {
        id: "P1634",
        value: "Internal Voltage Regulator Malfunction",
    },
    {
        id: "P1635",
        value: "Internal Vref Malfunction",
    },
    {
        id: "P1636",
        value: "Theft Deterrent Start Enable Signal Not Correct/ Main Relay Malfunction (Power Hold)",
    },
    {
        id: "P1637",
        value: "Smart Alternator Faults Sensor/Circuit Malfunction",
    },
    {
        id: "P1638",
        value: "KAM Voltage Too Low",
    },
    {
        id: "P1639",
        value: "Data Output Link Circuit Failure",
    },
    {
        id: "P1640",
        value: "Tire / Axle Ratio Out of Acceptable Range",
    },
    {
        id: "P1641",
        value: "Inductive Signature Chip Communication Error",
    },
    {
        id: "P1642",
        value: "Can Link ECM/ABSCM Circuit / Network Malfunction",
    },
    {
        id: "P1643",
        value: "Can Link ECM/INSTM Circuit / Network Malfunction",
    },
    {
        id: "P1644",
        value: "Vehicle ID Block Corrupted or Not Programmed",
    },
    {
        id: "P1645",
        value: "Powertrain DTCs Available in Another Module",
    },
    {
        id: "P1650",
        value: "Fuel Pump Primary Circuit Failure",
    },
    {
        id: "P1651",
        value: "Fuel Pump Monitor Circuit High Input",
    },
    {
        id: "P1652",
        value: "Fuel Pump Monitor Circuit Low Input",
    },
    {
        id: "P1653",
        value: "Fuel Pump Speed Control Circuit Malfunction",
    },
    {
        id: "P1654",
        value: "Fuel Pump Resistor Switch Circuit Malfunction",
    },
    {
        id: "P1655",
        value: "PSP Switch Out of Self Test Range",
    },
    {
        id: "P1660",
        value: "PSP Switch Input Malfunction",
    },
    {
        id: "P1661",
        value: "IAC Monitor Disabled by PSP Switch Failed On",
    },
    {
        id: "P1662",
        value: "Power Steering Output Circuit Malfunction",
    },
    {
        id: "P1663",
        value: "Recirculation Override Circuit Malfunction",
    },
    {
        id: "P1667",
        value: "Starter Disable Circuit Malfunction",
    },
    {
        id: "P1668",
        value: "Output Circuit Check Signal High",
    },
    {
        id: "P1670",
        value: "Output Circuit Check Signal Low",
    },
    {
        id: "P1680",
        value: "IDM_EN Circuit Failure",
    },
    {
        id: "P1681",
        value: "Fuel Demand Command Signal Circuit Malfunction",
    },
    {
        id: "P1682",
        value: "CI Circuit Malfunction",
    },
    {
        id: "P1683",
        value: "PCM - IDM Communications Error",
    },
    {
        id: "P1684",
        value: "Electronic Feedback Signal Not Detected",
    },
    {
        id: "P1685",
        value: "Metering Oil Pump Malfunction",
    },
    {
        id: "P1686",
        value: "Metering Oil Pump Malfunction",
    },
    {
        id: "P1687",
        value: "Metering Oil Pump Malfunction",
    },
    {
        id: "P1688",
        value: "Metering Oil Pump Temperature Sensor Circuit Malfunction",
    },
    {
        id: "P1689",
        value: "Metering Oil Pump Position Sensor Circuit Malfunction",
    },
    {
        id: "P1690",
        value: "Metering Oil Pump Stepping Motor Circuit Malfunction",
    },
    {
        id: "P1691",
        value: "Metering Oil Pump Stepping Motor Circuit Malfunction",
    },
    {
        id: "P1692",
        value: "Metering Oil Pump Stepping Motor Circuit Malfunction",
    },
    {
        id: "P1693",
        value: "Metering Oil Pump Stepping Motor Circuit Malfunction",
    },
    {
        id: "P1694",
        value: "Oil Pressure Control Solenoid Circuit Malfunction",
    },
    {
        id: "P1700",
        value: "Wastegate Solenoid Circuit Malfunction",
    },
    {
        id: "P1701",
        value: "Turbo Pressure Control Solenoid Circuit Malfunction",
    },
    {
        id: "P1702",
        value: "Turbo Control Solenoid Circuit Malfunction",
    },
    {
        id: "P1703",
        value: "Turbo Charge Control Circuit Malfunction",
    },
    {
        id: "P1704",
        value: "Turbo Charge Relief Circuit Malfunction",
    },
    {
        id: "P1705",
        value: "Transmission Indeterminate Failure (Failed to Neutral)",
    },
    {
        id: "P1706",
        value: "Reverse Engagement Error",
    },
    {
        id: "P1707",
        value: "TRS Circuit Intermittent Malfunction",
    },
    {
        id: "P1708",
        value: "Brake Switch Out Of Self Test Range",
    },
    {
        id: "P1709",
        value: "Digital TRS Failed to Transition States in KOEO / KOER",
    },
    {
        id: "P1711",
        value: "Not in P or N During KOEO / KOER",
    },
    {
        id: "P1712",
        value: "High Vehicle Speed Observed in Park",
    },
    {
        id: "P1713",
        value: "Transfer Case Neutral Indicator Hard Fault Present",
    },
    {
        id: "P1714",
        value: "Clutch Switch Circuit Malfunction",
    },
    {
        id: "P1715",
        value: "PNP Switch Out Of Self Test Range",
    },
    {
        id: "P1716",
        value: "TFT Sensor Out Of Self Test Range",
    },
    {
        id: "P1717",
        value: "Trans Torque Reduction Request Signal Malfunction",
    },
    {
        id: "P1718",
        value: "TFT Sensor In Range Failure Low Value",
    },
    {
        id: "P1720",
        value: "SSA Inductive Signature Malfunction",
    },
    {
        id: "P1721",
        value: "SSB Inductive Signature Malfunction",
    },
    {
        id: "P1722",
        value: "SSC Inductive Signature Malfunction",
    },
    {
        id: "P1723",
        value: "SSD Inductive Signature Malfunction",
    },
    {
        id: "P1724",
        value: "TFT Sensor In Range Failure High",
    },
    {
        id: "P1725",
        value: "Vehicle Speed (Meter) Circuit Malfunction",
    },
    {
        id: "P1726",
        value: "Gear 1 Incorrect Ratio",
    },
    {
        id: "P1727",
        value: "Gear 2 Incorrect Ratio",
    },
    {
        id: "P1728",
        value: "Gear 3 incorrect Ratio",
    },
    {
        id: "P1729",
        value: "Gear 4 Incorrect Ratio",
    },
    {
        id: "P1730",
        value: "Insufficient Engine Speed Increase During Self Test",
    },
    {
        id: "P1731",
        value: "Insufficient Engine Speed Decrease During Self Test",
    },
    {
        id: "P1732",
        value: "Coast Clutch Solenoid Inductive Signature Malfunction",
    },
    {
        id: "P1733",
        value: "Transmission Slip Error",
    },
    {
        id: "P1734",
        value: "4x4 Low Switch Error",
    },
    {
        id: "P1735",
        value: "Gear Control Malfunction 2",
    },
    {
        id: "P1736",
        value: "1-2 Shift Malfunction",
    },
    {
        id: "P1737",
        value: "2-3 Shift Malfunction",
    },
    {
        id: "P1738",
        value: "3-4 Shift Malfunction",
    },
    {
        id: "P1739",
        value: "Gear Control Malfunction",
    },
    {
        id: "P1740",
        value: "First Gear Switch Circuit Malfunction",
    },
    {
        id: "P1741",
        value: "Second Gear Switch Circuit Malfunction",
    },
    {
        id: "P1742",
        value: "Lockup Solenoid System",
    },
    {
        id: "P1743",
        value: "Shift Time Error",
    },
    {
        id: "P1744",
        value: "Slip Solenoid System",
    },
    {
        id: "P1745",
        value: "Torque Converter Clutch Inductive Signature Malfunction",
    },
    {
        id: "P1746",
        value: "Torque Converter Clutch Control Error",
    },
    {
        id: "P1747",
        value: "Torque Converter Clutch Solenoid Failed On",
    },
    {
        id: "P1748",
        value: "Torque Converter Clutch Solenoid Failied On",
    },
    {
        id: "P1749",
        value: "Torque Converter Clutch System Performance",
    },
    {
        id: "P1751",
        value: "Line Pressure Solenoid System",
    },
    {
        id: "P1754",
        value: 'Pressure Control Solenoid "A" Open Circuit',
    },
    {
        id: "P1755",
        value: 'Pressure Control Solenoid "A" Short Circuit',
    },
    {
        id: "P1756",
        value: "EPC Malfunction",
    },
    {
        id: "P1760",
        value: "Pressure Control Solenoid Failed Low",
    },
    {
        id: "P1761",
        value: "Shift Solenoid A Performance",
    },
    {
        id: "P1762",
        value: "Coast Clutch Solenoid Circuit Malfunction",
    },
    {
        id: "P1765",
        value: "Intermediate Speed Sensor (ISS) Malfunction",
    },
    {
        id: "P1767",
        value: "Shift Solenoid B Performance",
    },
    {
        id: "P1768",
        value: 'Pressure Control Solenoid "A" Short Circuit',
    },
    {
        id: "P1769",
        value: "Shift Solenoid C Performance",
    },
    {
        id: "P1770",
        value: "Overdrive Band Failed Off",
    },
    {
        id: "P1775",
        value: "Timing Solenoid Circuit Malfunction",
    },
    {
        id: "P1776",
        value: "Torque Converter Clutch Circuit Malfunction",
    },
    {
        id: "P1777",
        value: "Performance / Normal / Winter Mode Input Malfunction",
    },
    {
        id: "P1778",
        value: "AG4 Transmission Torque Modulation Fault",
    },
    {
        id: "P1779",
        value: "Clutch Solenoid Circuit Malfunction",
    },
    {
        id: "P1780",
        value: "Transmission System MIL Fault",
    },
    {
        id: "P1781",
        value: "Ignition Retard Request Duration Fault",
    },
    {
        id: "P1782",
        value: "Ignition Retard Request Circuit Fault",
    },
    {
        id: "P1783",
        value: "Transmission Reverse I/P Circuit Malfunction",
    },
    {
        id: "P1784",
        value: "TCIL Circuit Malfunction",
    },
    {
        id: "P1785",
        value: "Trans Control Switch (O/D Cancel) Out of Self Test Range",
    },
    {
        id: "P1786",
        value: "4X4 Switch Out of Self Test Range",
    },
    {
        id: "P1787",
        value: "P/ES Circuit Out Of Self Test Range",
    },
    {
        id: "P1788",
        value: "Transmission Overtemperature Condition",
    },
    {
        id: "P1789",
        value: "Transmission Mechanical Failure - First And Reverse",
    },
    {
        id: "P1790",
        value: "Transmission Mechanical Failure - First And Second",
    },
    {
        id: "P1791",
        value: "3-2 Downshift Error",
    },
    {
        id: "P1792",
        value: "2-1 Downshift Error",
    },
    {
        id: "P1793",
        value: 'Pressure Control Solenoid "B" Open Circuit',
    },
    {
        id: "P1794",
        value: 'Pressure Control Solenoid "B" Short Circuit',
    },
    {
        id: "P1795",
        value: "TP (Mechanical) Circuit Malfunction",
    },
    {
        id: "P1796",
        value: "TP (Electric) Circuit Malfunction",
    },
    {
        id: "P1797",
        value: "Barometer Pressure Circuit Malfunction",
    },
    {
        id: "P1798",
        value: "Intake Air Volume Circuit Malfunction",
    },
    {
        id: "P1799",
        value: "Battery Voltage Circuit Malfunction",
    },
    {
        id: "P1800",
        value: "Idle Switch Circuit Malfunction",
    },
    {
        id: "P1801",
        value: "Kick Down Switch Circuit Malfunction",
    },
    {
        id: "P1802",
        value: "Neutral Switch Circuit Malfunction",
    },
    {
        id: "P1803",
        value: "Coolant Temperature Circuit Malfunction",
    },
    {
        id: "P1804",
        value: "Hold Switch Circuit Malfunction",
    },
    {
        id: "P1805",
        value: "Transmission Clutch Interlock Safety Switch Circuit Failure",
    },
    {
        id: "P1806",
        value: "Transmission Clutch Interlock Safety Switch Open Circuit",
    },
    {
        id: "P1807",
        value: "Transmission Clutch Interlock Safety Switch Short Circuit To Battery",
    },
    {
        id: "P1808",
        value: "Transmission Clutch Interlock Safety Switch Short Circuit To Ground",
    },
    {
        id: "P1809",
        value: "Transmission 4-Wheel Drive High Indicator Circuit Failure",
    },
    {
        id: "P1810",
        value: "Transmission 4-Wheel Drive High Indicator Open Circuit",
    },
    {
        id: "P1811",
        value: "Transmission 4-Wheel Drive High Indicator Short Circuit To Battery",
    },
    {
        id: "P1812",
        value: "Transmission 4-Wheel Drive High Indicator Short Circuit To Ground",
    },
    {
        id: "P1813",
        value: "Transmission 4-Wheel Drive Low Indicator Circuit Failure",
    },
    {
        id: "P1814",
        value: "Transmission 4-Wheel Drive Low Indicator Open Circuit",
    },
    {
        id: "P1815",
        value: "TFP Valve Position Switch Circuit/ Transmission 4-Wheel Drive Low Indicator Short Circuit To Battery",
    },
    {
        id: "P1816",
        value: "Transmission 4-Wheel Drive Low Indicator Short Circuit To Ground",
    },
    {
        id: "P1817",
        value: "Transmission 4-Wheel Drive Mode Select Circuit Failure",
    },
    {
        id: "P1818",
        value: "Transmission 4-Wheel Drive Mode Select Open Circuit",
    },
    {
        id: "P1819",
        value: "Transmission 4-Wheel Drive Mode Select Short Circuit To Battery",
    },
    {
        id: "P1820",
        value: "Transmission 4-Wheel Drive Mode Select Short Circuit To Ground",
    },
    {
        id: "P1821",
        value: "Transmission Neutral Safety Switch Circuit Failure",
    },
    {
        id: "P1822",
        value: "Transmission Neutral Safety Switch Open Circuit",
    },
    {
        id: "P1823",
        value: "Transmission Neutral Safety Switch Short Circuit To Battery",
    },
    {
        id: "P1824",
        value: "Transmission Neutral Safety Switch Short Circuit To Ground",
    },
    {
        id: "P1825",
        value: "Transmission Transfer Case Clockwise Shift Relay Coil Circuit Failure",
    },
    {
        id: "P1826",
        value: "Transmission Transfer Case Clockwise Shift Relay Coil Open Circuit",
    },
    {
        id: "P1827",
        value: "Transmission Transfer Case Clockwise Shift Relay Coil Short Circuit To Battery",
    },
    {
        id: "P1828",
        value: "Transmission Transfer Case Clockwise Shift Relay Coil Short Circuit To Ground",
    },
    {
        id: "P1829",
        value: "Transmission 4-Wheel Drive Clutch Relay Circuit Failure",
    },
    {
        id: "P1830",
        value: "Transmission 4-Wheel Drive Clutch Relay Open Circuit",
    },
    {
        id: "P1831",
        value: "Transmission 4-Wheel Drive Low Clutch Relay Circuit To Battery",
    },
    {
        id: "P1832",
        value: "Transmission 4-Wheel Drive Low Clutch Relay Circuit To Ground",
    },
    {
        id: "P1833",
        value: "Transmission Transfer Case Counter Clockwise Shift Relay Coil Circuit Failure",
    },
    {
        id: "P1834",
        value: "Transmission Transfer Case Counter Clockwise Shift Relay Coil Open Circuit",
    },
    {
        id: "P1835",
        value: "Transmission Transfer Case Counter Clockwise Shift Relay Coil Short Circuit To Battery",
    },
    {
        id: "P1836",
        value: "Transmission Transfer Case Counter Clockwise Shift Relay Coil Short Circuit To Ground",
    },
    {
        id: "P1837",
        value: "Transmission Transfer Case Differential Lock-Up Solenoid Circuit Failure",
    },
    {
        id: "P1838",
        value: "Transmission Transfer Case Differential Lock-Up Solenoid Open Circuit",
    },
    {
        id: "P1839",
        value: "Transmission Transfer Case Differential Lock-Up Solenoid Short Circuit To Battery",
    },
    {
        id: "P1840",
        value: "Transmission Transfer Case Differential Lock-Up Solenoid Short Circuit To Ground",
    },
    {
        id: "P1841",
        value: "Transmission Transfer Case Front Shaft Speed Sensor Circuit Failure",
    },
    {
        id: "P1842",
        value: "Transmission Transfer Case Rear Shaft Speed Sensor Circuit Failure",
    },
    {
        id: "P1843",
        value: "Transmission Transfer Case Shift Motor Circuit Failure",
    },
    {
        id: "P1844",
        value: "Transmission Transfer Case Shift Motor Open Circuit",
    },
    {
        id: "P1845",
        value: "Transmission Transfer Case Shift Motor Short Circuit To Battery",
    },
    {
        id: "P1846",
        value: "Transmission Transfer Case Shift Motor Short Circuit To Ground",
    },
    {
        id: "P1847",
        value: "Transmission Transfer Case Differential Lock-Up Feedback Switch Circuit Failure",
    },
    {
        id: "P1848",
        value: "Transmission Transfer Case Differential Lock-Up Feedback Switch Open Circuit",
    },
    {
        id: "P1849",
        value: "Transmission Transfer Case Differential Lock-Up Feedback Switch Short Circuit To Battery",
    },
    {
        id: "P1850",
        value: "Transmission Transfer Case Differential Lock-Up Feedback Switch Short Circuit To Ground",
    },
    {
        id: "P1867",
        value: "Transmission Transfer Case Contact Plate Power Circuit Failure",
    },
    {
        id: "P1868",
        value: "Transmission Transfer Case Contact Plate Power Open Circuit",
    },
    {
        id: "P1869",
        value: "Transmission Transfer Case Contact Plate Power Short To Battery",
    },
    {
        id: "P1870",
        value: "Transmission Transfer Case Contact Plate Power Short To Ground",
    },
    {
        id: "P1871",
        value: "Transmission Transfer Case System Concern - Servicing Required",
    },
    {
        id: "P1872",
        value: "Transmission Transfer Case Contact Plate General Circuit Failure",
    },
    {
        id: "P1873",
        value: "Transmission Automatic 4-Wheel Drive Indicator (Lamp) Circuit Failure",
    },
    {
        id: "P1874",
        value: "Transmission Automatic 4-Wheel Drive Indicator (Lamp) Circuit Short To Battery",
    },
    {
        id: "P1875",
        value: "Transmission Component Slipping/ Transmission Mechanical Transfer Case 4x4 Switch Circuit Failure",
    },
    {
        id: "P1876",
        value: "Transmission Mechanical Transfer Case 4x4 Switch Circuit Short To Battery",
    },
    {
        id: "P1877",
        value: "Transmission Mechanical 4-Wheel Drive Axle Lock Lamp Circuit Failure",
    },
    {
        id: "P1878",
        value: "Transmission Mechanical 4-Wheel Drive Axle Lock Lamp Circuit Short To Battery",
    },
    {
        id: "P1879",
        value: "Transmission Automatic Hall Effect Sensor Power Circuit Failure",
    },
    {
        id: "P1880",
        value: "Transmission Automatic Hall Effect Sensor Power Circuit Short To Battery / 4WD Low Switch Circuit Electrical",
    },
    {
        id: "P1881",
        value: "Transmission Transfer Case 2-Wheel Drive Solenoid Circuit Failure",
    },
    {
        id: "P1882",
        value: "Transmission Transfer Case 2-Wheel Drive Solenoid Circuit Short To Battery",
    },
    {
        id: "P1883",
        value: "Transmission Transfer Case Disengaged Solenoid Circuit Failure",
    },
    {
        id: "P1884",
        value: "Transmission Transfer Case Disengaged Solenoid Open Circuit",
    },
    {
        id: "P1885",
        value: "Transmission Transfer Case Disengaged Solenoid Short to Battery",
    },
    {
        id: "P1886",
        value: "Engine Coolant Level Switch Circuit Failure",
    },
    {
        id: "P1890",
        value: "Engine Coolant Level Switch Circuit Short to Ground",
    },
    {
        id: "P1891",
        value: "Engine Coolant Level Switch Circuit Failure",
    },
    {
        id: "P1900",
        value: "Engine Coolant Level Lamp Circuit Short to Ground",
    },
    {
        id: "P1901",
        value: "Transmission Transfer Case Disengaged Solenoid Short to Ground",
    },
    {
        id: "P1902",
        value: "4X4 Initialization Failure",
    },
    {
        id: "P1903",
        value: "Transmission 4WD Mode Select Return Input Circuit Failure",
    },
    {
        id: "P1904",
        value: "Transmission Transfer Case Contact Plate Ground Return Open Circuit",
    },
    {
        id: "P1905",
        value: "OSS Circuit Intermittent Malfunction",
    },
    {
        id: "P1906",
        value: "TSS Circuit Intermittent Malfunction",
    },
    {
        id: "P1907",
        value: 'Pressure Control Solenoid "B" Intermittent Short',
    },
    {
        id: "P1908",
        value: 'Pressure Control Solenoid "C" Short Circuit',
    },
    {
        id: "P1909",
        value: 'Pressure Control Solenoid "C" Open Circuit',
    },
    {
        id: "P1910",
        value: 'Pressure Control Solenoid "C" Intermittent Short',
    },
    {
        id: "P1911",
        value: "Kickdown Pull Relay Open or Short Circuit to Ground",
    },
    {
        id: "P1912",
        value: "Kickdown Hold Relay Open or Short Circuit to Ground",
    },
    {
        id: "P1913",
        value: "Transmission Pressure Circuit Solenoid Open or Short to Ground",
    },
    {
        id: "P1914",
        value: "Trans  Temp  Sensor Circuit Open or Shorted to Pwr  or Gnd",
    },
    {
        id: "P1915",
        value: "VFS A Pressure Output Failed Low",
    },
    {
        id: "P1916",
        value: "VFS B Pressure Output Failed Low",
    },
    {
        id: "P1917",
        value: "VFS C Pressure Output Failed Low",
    },
    {
        id: "P1918",
        value: "Pressure Switch A Circuit Malfunction",
    },
    {
        id: "B1200",
        value: "Climate Control Pushbutton Circuit Failure",
    },
    {
        id: "B1201",
        value: "Fuel Sender Circuit Failure",
    },
    {
        id: "B1202",
        value: "Fuel Sender Circuit Open",
    },
    {
        id: "B1203",
        value: "Fuel Sender Circuit Short To Battery",
    },
    {
        id: "B1204",
        value: "Fuel Sender Circuit Short To Ground",
    },
    {
        id: "B1205",
        value: "EIC Switch-1 Assembly Circuit Failure",
    },
    {
        id: "B1206",
        value: "EIC Switch-1 Assembly Circuit Open",
    },
    {
        id: "B1207",
        value: "EIC Switch-1 Assembly Circuit Short To Battery",
    },
    {
        id: "B1208",
        value: "EIC Switch-1 Assembly Circuit Short To Ground",
    },
    {
        id: "B1209",
        value: "EIC Switch-2 Assembly Circuit Failure",
    },
    {
        id: "B1210",
        value: "EIC Switch-2 Assembly Circuit Open",
    },
    {
        id: "B1211",
        value: "EIC Switch-2 Assembly Circuit Short To Battery",
    },
    {
        id: "B1212",
        value: "EIC Switch-2 Assembly Circuit Short To Ground",
    },
    {
        id: "B1213",
        value: "Anti-Theft Number of Programmed Keys Is Below Minimum",
    },
    {
        id: "B1214",
        value: "Running Board Lamp Circuit Failure",
    },
    {
        id: "B1215",
        value: "Running Board Lamp Circuit Short to Battery",
    },
    {
        id: "B1216",
        value: "Emergency & Road Side Assistance Switch Circuit Short to Ground",
    },
    {
        id: "B1217",
        value: "Horn Relay Coil Circuit Failure",
    },
    {
        id: "B1218",
        value: "Horn Relay Coil Circuit Short to Vbatt",
    },
    {
        id: "B1219",
        value: "Fuel Tank Pressure Sensor Circuit Failure",
    },
    {
        id: "B1220",
        value: "Fuel Tank Pressure Sensor Circuit Open",
    },
    {
        id: "B1222",
        value: "Fuel Temperature Sensor #1 Circuit Failure",
    },
    {
        id: "B1223",
        value: "Fuel Temperature Sensor #1 Circuit Open",
    },
    {
        id: "B1224",
        value: "Fuel Temperature Sensor #1 Circuit Short to Battery",
    },
    {
        id: "B1225",
        value: "Fuel Temperature Sensor #1 Circuit Short to Ground",
    },
    {
        id: "B1226",
        value: "Fuel Temperature Sensor #2 Circuit Failure",
    },
    {
        id: "B1227",
        value: "Fuel Temperature Sensor #2 Circuit Open",
    },
    {
        id: "B1228",
        value: "Fuel Temperature Sensor #2 Circuit Short to Battery",
    },
    {
        id: "B1229",
        value: "Fuel Temperature Sensor #2 Circuit Short to Ground",
    },
    {
        id: "B1231",
        value: "Longitudinal Acceleration Threshold Exceeded",
    },
    {
        id: "B1232",
        value: "See Manufacturer",
    },
    {
        id: "B1233",
        value: "Glass Break Sensor Failure",
    },
    {
        id: "B1234",
        value: "Mirror Switch Invalid Code",
    },
    {
        id: "B1235",
        value: "Window Feedback Failure",
    },
    {
        id: "B1236",
        value: "Window Feedback Loss of Signal",
    },
    {
        id: "B1237",
        value: "Window Feedback Out of Range",
    },
    {
        id: "B1238",
        value: "Over Temperature Fault",
    },
    {
        id: "B1239",
        value: "Air Flow Blend Door Driver Circuit Failure",
    },
    {
        id: "B1240",
        value: "Wiper Washer Rear Pump Relay Circuit Failure",
    },
    {
        id: "B1241",
        value: "Wiper Washer Rear Pump Relay Circuit Short to Battery",
    },
    {
        id: "B1242",
        value: "Air Flow Recirculation Door Driver Circuit Failure",
    },
    {
        id: "B1243",
        value: "Express Window Down Switch Circuit Short to Battery",
    },
    {
        id: "B1244",
        value: "Wiper Rear Motor Run Relay Circuit Failure",
    },
    {
        id: "B1245",
        value: "Wiper Rear Motor Run Relay Circuit Short to Battery",
    },
    {
        id: "B1246",
        value: "Dim Panel Potentiometer Switch Circuit Failure",
    },
    {
        id: "B1247",
        value: "Panel Dim Switch Circuit Open",
    },
    {
        id: "B1249",
        value: "Blend Door Failure",
    },
    {
        id: "B1250",
        value: "Air Temperature Internal Sensor Circuit Failure",
    },
    {
        id: "B1251",
        value: "Air Temperature Internal Sensor Circuit Open",
    },
    {
        id: "B1252",
        value: "Air Temperature Internal Sensor Circuit Short To Battery",
    },
    {
        id: "B1253",
        value: "Air Temperature Internal Sensor Circuit Short To Ground",
    },
    {
        id: "B1254",
        value: "Air Temperature External Sensor Circuit Failure",
    },
    {
        id: "B1255",
        value: "Air Temperature External Sensor Circuit Open",
    },
    {
        id: "B1256",
        value: "Air Temperature External Sensor Circuit Short To Battery",
    },
    {
        id: "B1257",
        value: "Air Temperature External Sensor Circuit Short To Ground",
    },
    {
        id: "B1258",
        value: "Solar Radiation Sensor Circuit Failure",
    },
    {
        id: "B1259",
        value: "Solar Radiation Sensor Circuit Open",
    },
    {
        id: "B1260",
        value: "Solar Radiation Sensor Circuit Short To Battery",
    },
    {
        id: "B1261",
        value: "Solar Radiation Sensor Circuit Short To Ground",
    },
    {
        id: "B1262",
        value: "Servo Motor Defrost Circuit Failure",
    },
    {
        id: "B1263",
        value: "Servo Motor Vent Circuit Failure",
    },
    {
        id: "B1264",
        value: "Servo Motor Foot Circuit Failure",
    },
    {
        id: "B1265",
        value: "Servo Motor Coolair Bypass Circuit  Failure",
    },
    {
        id: "B1266",
        value: "Servo Motor Airintake Left Circuit Failure",
    },
    {
        id: "B1267",
        value: "Servo Motor Airintake Right Circuit Failure",
    },
    {
        id: "B1268",
        value: "Servo Motor Potentiometer Defrost Circuit Failure",
    },
    {
        id: "B1269",
        value: "Servo Motor Potentiometer Defrost Circuit Open",
    },
    {
        id: "B1270",
        value: "Servo Motor Potentiometer Defrost Circuit Short To Battery",
    },
    {
        id: "B1271",
        value: "Servo Motor Potentiometer Defrost Circuit Short To Ground",
    },
    {
        id: "B1272",
        value: "Servo Motor Potentiometer Vent Circuit Failure",
    },
    {
        id: "B1273",
        value: "Servo Motor Potentiometer Vent Circuit Open",
    },
    {
        id: "B1274",
        value: "Servo Motor Potentiometer Vent Circuit Short To Battery",
    },
    {
        id: "B1275",
        value: "Servo Motor Potentiometer Vent Circuit Short To Ground",
    },
    {
        id: "B1276",
        value: "Servo Motor Potentiometer Foot Circuit Failure",
    },
    {
        id: "B1277",
        value: "Servo Motor Potentiometer Foot Circuit Open",
    },
    {
        id: "B1278",
        value: "Servo Motor Potentiometer Foot Circuit Short To Battery",
    },
    {
        id: "B1279",
        value: "Servo Motor Potentiometer Foot Circuit Short To Ground",
    },
    {
        id: "B1280",
        value: "Servo Motor Potentiometer Coolair Circuit Failure",
    },
    {
        id: "B1281",
        value: "Servo Motor Potentiometer Coolair Circuit Open",
    },
    {
        id: "B1282",
        value: "Servo Motor Potentiometer Coolair Circuit Short To Battery",
    },
    {
        id: "B1283",
        value: "Servo Motor Potentiometer Coolair Circuit Short To Ground",
    },
    {
        id: "B1284",
        value: "Servo Motor Potentiometer Airintake Left Circuit Failure",
    },
    {
        id: "B1285",
        value: "Servo Motor Potentiometer Airintake Left Circuit Open",
    },
    {
        id: "B1286",
        value: "Servo Motor Potentiometer Airintake Left Circuit Short To Battery",
    },
    {
        id: "B1287",
        value: "Servo Motor Potentiometer Airintake Left Circuit Short To Ground",
    },
    {
        id: "B1288",
        value: "Servo Motor Potentiometer Airintake Right Circuit Failure",
    },
    {
        id: "B1289",
        value: "Servo Motor Potentiometer Airintake Right Circuit Open",
    },
    {
        id: "B1290",
        value: "Servo Motor Potentiometer Airintake Right Circuit Short To Battery",
    },
    {
        id: "B1291",
        value: "Servo Motor Potentiometer Airintake Right Circuit Short To Ground",
    },
    {
        id: "B1292",
        value: "Battery Power Relay Circuit Failure",
    },
    {
        id: "B1293",
        value: "Battery Power Relay Circuit Open",
    },
    {
        id: "B1294",
        value: "Battery Power Relay Circuit Short To Battery",
    },
    {
        id: "B1295",
        value: "Battery Power Relay Circuit Short To Ground",
    },
    {
        id: "B1296",
        value: "Power Supply Sensor Circuit Failure",
    },
    {
        id: "B1297",
        value: "Power Supply Sensor Circuit Open",
    },
    {
        id: "B1298",
        value: "Power Supply Sensor Circuit Short To Battery",
    },
    {
        id: "B1299",
        value: "Power Supply Sensor Circuit Short To Ground",
    },
    {
        id: "B1300",
        value: "Power Door Lock Circuit Failure",
    },
    {
        id: "B1301",
        value: "Power Door Lock Circuit Open",
    },
    {
        id: "B1302",
        value: "Accessory Delay Relay Coil Circuit Failure",
    },
    {
        id: "B1303",
        value: "Accessory Delay Relay Coil Circuit Open",
    },
    {
        id: "B1304",
        value: "Accessory Delay Relay Coil Circuit Short To Battery",
    },
    {
        id: "B1305",
        value: "Accessory Delay Relay Coil Circuit Short To Ground",
    },
    {
        id: "B1306",
        value: "Oil Level Switch Circuit Open",
    },
    {
        id: "B1307",
        value: "Oil Level Switch Circuit Short To Battery",
    },
    {
        id: "B1308",
        value: "Oil Level Switch Circuit Short To Ground",
    },
    {
        id: "B1309",
        value: "Power Door Lock Circuit Short To Ground",
    },
    {
        id: "B1310",
        value: "Power Door Unlock Circuit Failure",
    },
    {
        id: "B1311",
        value: "Power Door Unlock Circuit Open",
    },
    {
        id: "B1312",
        value: "Lamp Headlamp Input Circuit Short To Battery",
    },
    {
        id: "B1313",
        value: "Battery Saver Relay Coil Circuit Failure",
    },
    {
        id: "B1314",
        value: "Battery Saver Relay Coil Circuit Open",
    },
    {
        id: "B1315",
        value: "Battery Saver Relay Coil Circuit Short To Battery",
    },
    {
        id: "B1316",
        value: "Battery Saver Relay Coil Circuit Short To Ground",
    },
    {
        id: "B1317",
        value: "Battery Voltage High",
    },
    {
        id: "B1318",
        value: "Battery Voltage Low",
    },
    {
        id: "B1319",
        value: "Driver Door Ajar Circuit Failure",
    },
    {
        id: "B1320",
        value: "Driver Door Ajar Circuit Open",
    },
    {
        id: "B1321",
        value: "Driver Door Ajar Circuit Short To Battery",
    },
    {
        id: "B1322",
        value: "Driver Door Ajar Circuit Short To Ground",
    },
    {
        id: "B1323",
        value: "Door Ajar Lamp Circuit Failure",
    },
    {
        id: "B1324",
        value: "Door Ajar Lamp Circuit Open",
    },
    {
        id: "B1325",
        value: "Door Ajar Lamp Circuit Short To Battery",
    },
    {
        id: "B1326",
        value: "Door Ajar Lamp Circuit Short To Ground",
    },
    {
        id: "B1327",
        value: "Passenger Door Ajar Circuit Failure",
    },
    {
        id: "B1328",
        value: "Passenger Door Ajar Circuit Open",
    },
    {
        id: "B1329",
        value: "Passenger Door Ajar Circuit Short To Battery",
    },
    {
        id: "B1330",
        value: "Passenger Door Ajar Circuit Short To Ground",
    },
    {
        id: "B1331",
        value: "Decklid Ajar Rear Door Circuit Failure",
    },
    {
        id: "B1332",
        value: "Decklid Ajar Rear Door Circuit Open",
    },
    {
        id: "B1333",
        value: "Decklid Ajar Rear Door Circuit Short To Battery",
    },
    {
        id: "B1334",
        value: "Decklid Ajar Rear Door Circuit Short To Ground",
    },
    {
        id: "B1335",
        value: "Door Ajar RR Circuit Failure",
    },
    {
        id: "B1336",
        value: "Door Ajar RR Circuit Open",
    },
    {
        id: "B1337",
        value: "Door Ajar RR Circuit Short To Battery",
    },
    {
        id: "B1338",
        value: "Door Ajar RR Circuit Short To Ground",
    },
    {
        id: "B1339",
        value: "Chime Input Request Circuit Short To Battery",
    },
    {
        id: "B1340",
        value: "Chime Input Request Circuit Short To Ground",
    },
    {
        id: "B1341",
        value: "Power Door Unlock Circuit Short To Ground",
    },
    {
        id: "B1342",
        value: "ECU Is Defective",
    },
    {
        id: "B1343",
        value: "Heated Backlite Input Circuit Failure",
    },
    {
        id: "B1344",
        value: "Heated Backlite Input Circuit Open",
    },
    {
        id: "B1345",
        value: "Heated Backlite Input Circuit Short To Ground",
    },
    {
        id: "B1346",
        value: "Heated Backlite Input Circuit Short To Battery",
    },
    {
        id: "B1347",
        value: "Heated Backlite Relay Circuit Failure",
    },
    {
        id: "B1348",
        value: "Heated Backlite Relay Circuit Open",
    },
    {
        id: "B1349",
        value: "Heated Backlite Relay Short To Battery",
    },
    {
        id: "B1350",
        value: "Heated Backlite Relay Short To Ground",
    },
    {
        id: "B1351",
        value: "Ignition Key-In Circuit Short To Battery",
    },
    {
        id: "B1352",
        value: "Ignition Key-In Circuit Failure",
    },
    {
        id: "B1353",
        value: "Ignition Key-In Circuit Open",
    },
    {
        id: "B1354",
        value: "Ignition Key-In Circuit Short To Ground",
    },
    {
        id: "B1355",
        value: "Ignition Run Circuit Failure",
    },
    {
        id: "B1356",
        value: "Ignition Run Circuit Open",
    },
    {
        id: "B1357",
        value: "Ignition Run Circuit Short To Battery",
    },
    {
        id: "B1358",
        value: "Ignition Run Circuit Short To Ground",
    },
    {
        id: "B1359",
        value: "Ignition Run/Acc Circuit Failure",
    },
    {
        id: "B1360",
        value: "Ignition Run/Acc Circuit Open",
    },
    {
        id: "B1361",
        value: "Ignition Run/Acc Circuit Short To Battery",
    },
    {
        id: "B1362",
        value: "Ignition Run/Acc Circuit Short To Ground",
    },
    {
        id: "B1363",
        value: "Ignition Start Circuit Failure",
    },
    {
        id: "B1364",
        value: "Ignition Start Circuit Open",
    },
    {
        id: "B1365",
        value: "Ignition Start Circuit Short To Battery",
    },
    {
        id: "B1366",
        value: "Ignition Start Circuit Short To Ground",
    },
    {
        id: "B1367",
        value: "Ignition Tach Circuit Failure",
    },
    {
        id: "B1368",
        value: "Ignition Tach Circuit Open",
    },
    {
        id: "B1369",
        value: "Ignition Tach Circuit Short To Battery",
    },
    {
        id: "B1370",
        value: "Ignition Tach Circuit Short To Ground",
    },
    {
        id: "B1371",
        value: "Illuminated Entry Relay Circuit Failure",
    },
    {
        id: "B1372",
        value: "Illuminated Entry Relay Circuit Open",
    },
    {
        id: "B1373",
        value: "Illuminated Entry Relay Short To Battery",
    },
    {
        id: "B1374",
        value: "Illuminated Entry Relay Short To Ground",
    },
    {
        id: "B1375",
        value: "Oil Change Lamp Circuit Open",
    },
    {
        id: "B1376",
        value: "Oil Change Lamp Circuit Short To Battery",
    },
    {
        id: "B1377",
        value: "Oil Change Lamp Circuit Failure",
    },
    {
        id: "B1378",
        value: "Oil Change Lamp Circuit Short To Ground",
    },
    {
        id: "B1379",
        value: "Oil Change Reset Button Circuit Short To Ground",
    },
    {
        id: "B1380",
        value: "Oil Change Reset Button Circuit Failure",
    },
    {
        id: "B1381",
        value: "Oil Change Reset Button Circuit Open",
    },
    {
        id: "B1382",
        value: "Oil Change Reset Button Circuit Short To Battery",
    },
    {
        id: "B1383",
        value: "Oil Level Lamp Circuit Short To Battery",
    },
    {
        id: "B1384",
        value: "Oil Level Lamp Circuit Failure",
    },
    {
        id: "B1385",
        value: "Oil Level Lamp Circuit Open",
    },
    {
        id: "B1386",
        value: "Oil Level Lamp Circuit Short To Ground",
    },
    {
        id: "B1387",
        value: "Oil Temperature Sensor Circuit Open",
    },
    {
        id: "B1388",
        value: "Oil Temperature Sensor Circuit Short To Battery",
    },
    {
        id: "B1389",
        value: "Oil Temperature Sensor Circuit Failure",
    },
    {
        id: "B1390",
        value: "Oil Temperature Sensor Circuit Short To Ground",
    },
    {
        id: "B1391",
        value: "Oil Level Switch Circuit Failure",
    },
    {
        id: "B1392",
        value: "Power Door Memory Lock Relay Circuit Failure",
    },
    {
        id: "B1393",
        value: "Power Door Memory Lock Relay Circuit Open",
    },
    {
        id: "B1394",
        value: "Power Door Memory Lock Relay Circuit Short To Battery",
    },
    {
        id: "B1395",
        value: "Power Door Memory Lock Relay Circuit Short To Ground",
    },
    {
        id: "B1396",
        value: "Power Door Lock Circuit Short To Battery",
    },
    {
        id: "B1397",
        value: "Power Door Unlock Circuit Short To Battery",
    },
    {
        id: "B1398",
        value: "Driver Power Window One Touch Window Relay Circuit Failure",
    },
    {
        id: "B1399",
        value: "Driver Power Window One Touch Window Relay Circuit Open",
    },
    {
        id: "B1400",
        value: "Driver Power Window One Touch Window Relay Circuit Short To Battery",
    },
    {
        id: "B1401",
        value: "Driver Power Window One Touch Window Relay Circuit Short To Ground",
    },
    {
        id: "B1402",
        value: "Driver Power Window Down Switch Circuit Failure",
    },
    {
        id: "B1403",
        value: "Driver Power Window Up Switch Circuit Failure",
    },
    {
        id: "B1404",
        value: "Driver Power Window Down Circuit Open",
    },
    {
        id: "B1405",
        value: "Driver Power Window Down Circuit Short To Battery",
    },
    {
        id: "B1406",
        value: "Driver Power Window Down Circuit Short To Ground",
    },
    {
        id: "B1407",
        value: "Driver Power Window Up Circuit Open",
    },
    {
        id: "B1408",
        value: "Driver Power Window Up Circuit Short To Battery",
    },
    {
        id: "B1409",
        value: "Driver Power Window Up Circuit Short To Ground",
    },
    {
        id: "B1410",
        value: "Driver Power Window Motor Circuit Failure",
    },
    {
        id: "B1411",
        value: "Driver Power Window Motor Circuit Open",
    },
    {
        id: "B1412",
        value: "Driver Power Window Motor Circuit Short To Battery",
    },
    {
        id: "B1413",
        value: "Driver Power Window Motor Circuit Short To Ground",
    },
    {
        id: "B1414",
        value: "Power Window LR Motor Circuit Failure",
    },
    {
        id: "B1415",
        value: "Power Window LR Motor Circuit Open",
    },
    {
        id: "B1416",
        value: "Power Window LR Motor Circuit Short To Battery",
    },
    {
        id: "B1417",
        value: "Power Window LR Motor Circuit Short To Ground",
    },
    {
        id: "B1418",
        value: "Passenger Power Window Motor Circuit Failure",
    },
    {
        id: "B1419",
        value: "Passenger Power Window Motor Circuit Open",
    },
    {
        id: "B1420",
        value: "Passenger Power Window Motor Circuit Short To Battery",
    },
    {
        id: "B1421",
        value: "Passenger Power Window Motor Circuit Short To Ground",
    },
    {
        id: "B1422",
        value: "Power Window RR Motor Circuit Failure",
    },
    {
        id: "B1423",
        value: "Power Window RR Motor Circuit Open",
    },
    {
        id: "B1424",
        value: "Power Window RR Motor Circuit Short To Battery",
    },
    {
        id: "B1425",
        value: "Power Window RR Motor Circuit Short To Ground",
    },
    {
        id: "B1426",
        value: "Lamp Seat Belt Circuit Short To Battery",
    },
    {
        id: "B1427",
        value: "Lamp Seat Belt Circuit Open",
    },
    {
        id: "B1428",
        value: "Lamp Seat Belt Circuit Failure",
    },
    {
        id: "B1429",
        value: "Lamp Seat Belt Circuit Short To Ground",
    },
    {
        id: "B1430",
        value: "Seat Belt Switch Circuit Short To Ground",
    },
    {
        id: "B1431",
        value: "Wiper Brake/Run Relay Circuit Failure",
    },
    {
        id: "B1432",
        value: "Wiper Brake/Run Relay Circuit Short To Battery",
    },
    {
        id: "B1433",
        value: "Wiper Brake/Run Relay Circuit Short To Ground",
    },
    {
        id: "B1434",
        value: "Wiper Hi/Low Speed Relay Coil Circuit Failure",
    },
    {
        id: "B1435",
        value: "Wiper Hi/Low Speed Relay Coil Circuit Open",
    },
    {
        id: "B1436",
        value: "Wiper Hi/Low Speed Relay Coil Circuit Short To Battery",
    },
    {
        id: "B1437",
        value: "Wiper Hi/Low Speed Relay Coil Circuit Short To Ground",
    },
    {
        id: "B1438",
        value: "Wiper Mode Select Switch Circuit Failure",
    },
    {
        id: "B1439",
        value: "Wiper Mode Select Switch Circuit Open",
    },
    {
        id: "B1440",
        value: "Wiper Mode Select Switch Circuit Short To Battery",
    },
    {
        id: "B1441",
        value: "Wiper Mode Select Switch Circuit Short To Ground",
    },
    {
        id: "B1442",
        value: "Door Handle Switch Circuit Failure",
    },
    {
        id: "B1443",
        value: "Door Handle Switch Circuit Open",
    },
    {
        id: "B1444",
        value: "Door Handle Switch Circuit Short To Battery",
    },
    {
        id: "B1445",
        value: "Door Handle Switch Circuit Short To Ground",
    },
    {
        id: "B1446",
        value: "Wiper Park Sense Circuit Failure",
    },
    {
        id: "B1447",
        value: "Wiper Park Sense Circuit Open",
    },
    {
        id: "B1448",
        value: "Wiper Park Sense Circuit Short To Battery",
    },
    {
        id: "B1449",
        value: "Wiper Park Sense Circuit Short To Ground",
    },
    {
        id: "B1450",
        value: "Wiper Wash/Delay Switch Circuit Failure",
    },
    {
        id: "B1451",
        value: "Wiper Wash/Delay Switch Circuit Open",
    },
    {
        id: "B1452",
        value: "Wiper Wash/Delay Switch Circuit Short To Battery",
    },
    {
        id: "B1453",
        value: "Wiper Wash/Delay Switch Circuit Short To Ground",
    },
    {
        id: "B1454",
        value: "Wiper Washer Fluid Lamp Circuit Failure",
    },
    {
        id: "B1455",
        value: "Wiper Washer Fluid Lamp Circuit Open",
    },
    {
        id: "B1456",
        value: "Wiper Washer Fluid Lamp Circuit Short To Battery",
    },
    {
        id: "B1457",
        value: "Wiper Washer Fluid Lamp Circuit Short To Ground",
    },
    {
        id: "B1458",
        value: "Wiper Washer Pump Motor Relay Circuit Failure",
    },
    {
        id: "B1459",
        value: "Wiper Washer Pump Motor Relay Coil Circuit Open",
    },
    {
        id: "B1460",
        value: "Wiper Washer Pump Motor Relay Coil Circuit Short To Battery",
    },
    {
        id: "B1461",
        value: "Wiper Washer Pump Motor Relay Coil Circuit Short To Ground",
    },
    {
        id: "B1462",
        value: "Seat Belt Switch Circuit Failure",
    },
    {
        id: "B1463",
        value: "Seat Belt Switch Circuit Open",
    },
    {
        id: "B1464",
        value: "Seat Belt Switch Circuit Short To Battery",
    },
    {
        id: "B1465",
        value: "Wiper Brake/Run Relay Circuit Open",
    },
    {
        id: "B1466",
        value: "Wiper Hi/Low Speed Not Switching",
    },
    {
        id: "B1467",
        value: "Wiper Hi/Low Speed Circuit Motor Short To Battery",
    },
    {
        id: "B1468",
        value: "Chime Input Request Circuit Failure",
    },
    {
        id: "B1469",
        value: "Chime Input Request Circuit Open",
    },
    {
        id: "B1470",
        value: "Lamp Headlamp Input Circuit Failure",
    },
    {
        id: "B1471",
        value: "Lamp Headlamp Input Circuit Open",
    },
    {
        id: "B1472",
        value: "Lamp Headlamp Input Circuit Short To Ground",
    },
    {
        id: "B1473",
        value: "Wiper Low Speed Circuit Motor Failure",
    },
    {
        id: "B1474",
        value: "Battery Saver Power Relay Circuit Short To Battery",
    },
    {
        id: "B1475",
        value: "Accessory Delay Relay Contact Short To Battery",
    },
    {
        id: "B1476",
        value: "Wiper High Speed Circuit Motor Failure",
    },
    {
        id: "B1477",
        value: "Wiper Hi/Low Circuit Motor Short To Ground",
    },
    {
        id: "B1478",
        value: "Power Window One Touch Up/Down Activated Simultaneously",
    },
    {
        id: "B1479",
        value: "Wiper Washer Fluid Level Sensor Circuit Failure",
    },
    {
        id: "B1480",
        value: "Wiper Washer Fluid Level Sensor Circuit Open",
    },
    {
        id: "B1481",
        value: "Wiper Washer Fluid Level Sensor Circuit Short To Battery",
    },
    {
        id: "B1482",
        value: "Wiper Washer Fluid Level Sensor Circuit Short To Ground",
    },
    {
        id: "B1483",
        value: "Brake Pedal Input Circuit Failure",
    },
    {
        id: "B1484",
        value: "Brake Pedal Input Open Circuit",
    },
    {
        id: "B1485",
        value: "Brake Pedal Input Circuit Battery Short",
    },
    {
        id: "B1486",
        value: "Brake Pedal Input Circuit Ground Short",
    },
    {
        id: "B1487",
        value: "Door Handle Right Front Circuit Failure",
    },
    {
        id: "B1488",
        value: "Door Handle Right Front Circuit Open",
    },
    {
        id: "B1489",
        value: "Door Handle Right Front Short To Battery",
    },
    {
        id: "B1490",
        value: "Door Handle Right Front Short To Ground",
    },
    {
        id: "B1491",
        value: "Ignition Cylinder Sensor Circuit Failure",
    },
    {
        id: "B1492",
        value: "Ignition Cylinder Sensor Open Circuit",
    },
    {
        id: "B1493",
        value: "Ignition Cylinder Sensor Battery Short",
    },
    {
        id: "B1494",
        value: "Ignition Cylinder Sensor Ground Short",
    },
    {
        id: "B1495",
        value: "Decklid Punch-Out Sensor Circuit Failure",
    },
    {
        id: "B1496",
        value: "Decklid Punch-Out Sensor Open Circuit",
    },
    {
        id: "B1497",
        value: "Decklid Punch-Out Sensor Battery Short",
    },
    {
        id: "B1498",
        value: "Decklid Punch-Out Sensor Ground Short",
    },
    {
        id: "B1499",
        value: "Lamp Turn Signal Left Circuit Failure",
    },
    {
        id: "B1500",
        value: "Lamp Turn Signal Left Circuit Open",
    },
    {
        id: "B1501",
        value: "Lamp Turn Signal Left Circuit Short To Battery",
    },
    {
        id: "B1502",
        value: "Lamp Turn Signal Left Circuit Short To Ground",
    },
    {
        id: "B1503",
        value: "Lamp Turn Signal Right Circuit Failure",
    },
    {
        id: "B1504",
        value: "Lamp Turn Signal Right Circuit Open",
    },
    {
        id: "B1505",
        value: "Lamp Turn Signal Right Circuit Short To Battery",
    },
    {
        id: "B1506",
        value: "Lamp Turn Signal Right Circuit Short To Ground",
    },
    {
        id: "B1507",
        value: "Flash To Pass Switch Circuit Failure",
    },
    {
        id: "B1508",
        value: "Flash To Pass Switch Circuit Open",
    },
    {
        id: "B1509",
        value: "Flash To Pass Switch Circuit Short To Battery",
    },
    {
        id: "B1510",
        value: "Flash To Pass Switch Circuit Short To Ground",
    },
    {
        id: "B1511",
        value: "Driver Door Handle  Circuit Failure",
    },
    {
        id: "B1512",
        value: "Driver Door Handle  Circuit Open",
    },
    {
        id: "B1513",
        value: "Driver Door Handle  Circuit Short To Battery",
    },
    {
        id: "B1514",
        value: "Driver Door Handle  Circuit Short To Ground",
    },
    {
        id: "B1515",
        value: "Seat Driver Occupied Switch Circuit Failure",
    },
    {
        id: "B1516",
        value: "Seat Driver Occupied Switch Circuit Open",
    },
    {
        id: "B1517",
        value: "Seat Driver Occupied Switch Circuit Short To Battery",
    },
    {
        id: "B1518",
        value: "Seat Driver Occupied Switch Circuit Short To Ground",
    },
    {
        id: "B1519",
        value: "Hood Switch Circuit Failure",
    },
    {
        id: "B1520",
        value: "Hood Switch Circuit Open",
    },
    {
        id: "B1521",
        value: "Hood Switch Circuit Short To Battery",
    },
    {
        id: "B1522",
        value: "Hood Switch Circuit Short To Ground",
    },
    {
        id: "B1523",
        value: "Keyless Entry Circuit Failure",
    },
    {
        id: "B1524",
        value: "Keyless Entry Circuit Open",
    },
    {
        id: "B1525",
        value: "Keyless Entry Circuit Short To Battery",
    },
    {
        id: "B1526",
        value: "Keyless Entry Circuit Short To Ground",
    },
    {
        id: "B1527",
        value: "Memory Set Switch Circuit Failure",
    },
    {
        id: "B1528",
        value: "Memory Set Switch Circuit Open",
    },
    {
        id: "B1529",
        value: "Memory Set Switch Circuit Short To Battery",
    },
    {
        id: "B1530",
        value: "Memory Set Switch Circuit Short To Ground",
    },
    {
        id: "B1531",
        value: "Memory 1 Switch Circuit Failure",
    },
    {
        id: "B1532",
        value: "Memory 1 Switch Circuit Open",
    },
    {
        id: "B1533",
        value: "Memory 1 Switch Circuit Short To Battery",
    },
    {
        id: "B1534",
        value: "Memory 1 Switch Circuit Short To Ground",
    },
    {
        id: "B1535",
        value: "Memory 2 Switch Circuit Failure",
    },
    {
        id: "B1536",
        value: "Memory 2 Switch Circuit Open",
    },
    {
        id: "B1537",
        value: "Memory 2 Switch Circuit Short To Battery",
    },
    {
        id: "B1538",
        value: "Memory 2 Switch Circuit Short To Ground",
    },
    {
        id: "B1539",
        value: "Mirror Driver Switch Assembly Circuit Failure",
    },
    {
        id: "B1540",
        value: "Mirror Driver Switch Assembly Circuit Open",
    },
    {
        id: "B1541",
        value: "Mirror Driver Switch Assembly Circuit Short To Battery",
    },
    {
        id: "B1542",
        value: "Mirror Driver Switch Assembly Circuit Short To Ground",
    },
    {
        id: "B1543",
        value: "Seat Direction Switch Assembly Circuit Failure",
    },
    {
        id: "B1544",
        value: "Seat Direction Switch Assembly Circuit Open",
    },
    {
        id: "B1545",
        value: "Seat Direction Switch Assembly Circuit Short To Battery",
    },
    {
        id: "B1546",
        value: "Seat Direction Switch Assembly Circuit Short To Ground",
    },
    {
        id: "B1547",
        value: "Power Window Master Circuit Failure",
    },
    {
        id: "B1548",
        value: "Power Window Master Circuit Open",
    },
    {
        id: "B1549",
        value: "Power Window Master Circuit Short To Battery",
    },
    {
        id: "B1550",
        value: "Power Window Master Circuit Short To Ground",
    },
    {
        id: "B1551",
        value: "Decklid Release Circuit Failure",
    },
    {
        id: "B1552",
        value: "Decklid Release Circuit Open",
    },
    {
        id: "B1553",
        value: "Decklid Release Circuit Short To Battery",
    },
    {
        id: "B1554",
        value: "Decklid Release Circuit Short To Ground",
    },
    {
        id: "B1555",
        value: "Ignition Run/Start Circuit Failure",
    },
    {
        id: "B1556",
        value: "Ignition Run/Start Circuit Open",
    },
    {
        id: "B1557",
        value: "Ignition Run/Start Circuit Short To Battery",
    },
    {
        id: "B1558",
        value: "Ignition Run/Start Circuit Short To Ground",
    },
    {
        id: "B1559",
        value: "Door Lock Cylinder Circuit Failure",
    },
    {
        id: "B1560",
        value: "Door Lock Cylinder Circuit Open",
    },
    {
        id: "B1561",
        value: "Door Lock Cylinder Circuit Short To Battery",
    },
    {
        id: "B1562",
        value: "Door Lock Cylinder Circuit Short To Ground",
    },
    {
        id: "B1563",
        value: "Door Ajar Circuit Failure",
    },
    {
        id: "B1564",
        value: "Door Ajar Circuit Open",
    },
    {
        id: "B1565",
        value: "Door Ajar Circuit Short To Battery",
    },
    {
        id: "B1566",
        value: "Door Ajar Circuit Short To Ground",
    },
    {
        id: "B1567",
        value: "Lamp Headlamp High-Beam Circuit Failure",
    },
    {
        id: "B1568",
        value: "Lamp Headlamp High-Beam Circuit Open",
    },
    {
        id: "B1569",
        value: "Lamp Headlamp High-Beam Circuit Short To Battery",
    },
    {
        id: "B1570",
        value: "Lamp Headlamp High-Beam Circuit Short To Ground",
    },
    {
        id: "B1571",
        value: "Door Ajar LR Circuit Failure",
    },
    {
        id: "B1572",
        value: "Door Ajar LR Circuit Open",
    },
    {
        id: "B1573",
        value: "Door Ajar LR Circuit  Short To Battery",
    },
    {
        id: "B1574",
        value: "Door Ajar LR Circuit Short To Ground",
    },
    {
        id: "B1575",
        value: "Lamp Park Input Circuit Failure",
    },
    {
        id: "B1576",
        value: "Lamp Park Input Circuit Open",
    },
    {
        id: "B1577",
        value: "Lamp Park Input Circuit Short To Battery",
    },
    {
        id: "B1578",
        value: "Lamp Park Input Circuit Short To Ground",
    },
    {
        id: "B1579",
        value: "Dim Panel Increase Input Circuit Failure",
    },
    {
        id: "B1580",
        value: "Dim Panel Increase Input Circuit Open",
    },
    {
        id: "B1581",
        value: "Dim Panel Increase Input Circuit Short To Battery",
    },
    {
        id: "B1582",
        value: "Dim Panel Increase Input Circuit Short To Ground",
    },
    {
        id: "B1583",
        value: "Dim Panel Decrease Input Circuit Failure",
    },
    {
        id: "B1584",
        value: "Dim Panel Decrease Input Circuit Open",
    },
    {
        id: "B1585",
        value: "Dim Panel Decrease Input Circuit Short To Battery",
    },
    {
        id: "B1586",
        value: "Dim Panel Decrease Input Circuit Short To Ground",
    },
    {
        id: "B1587",
        value: "Autolamp Delay Increase Circuit Failure",
    },
    {
        id: "B1588",
        value: "Autolamp Delay Increase Circuit Open",
    },
    {
        id: "B1589",
        value: "Autolamp Delay Increase Circuit Short To Battery",
    },
    {
        id: "B1590",
        value: "Autolamp Delay Increase Circuit Short To Ground",
    },
    {
        id: "B1591",
        value: "Autolamp Delay Decrease Circuit Failure",
    },
    {
        id: "B1592",
        value: "Autolamp Delay Decrease Circuit Open",
    },
    {
        id: "B1593",
        value: "Autolamp Delay Decrease Circuit Short To Battery",
    },
    {
        id: "B1594",
        value: "Autolamp Delay Decrease Circuit Short To Ground",
    },
    {
        id: "B1595",
        value: "Ignition Switch Illegal Input Code",
    },
    {
        id: "B1596",
        value: "Service Continuous Codes",
    },
    {
        id: "B1600",
        value: "PATS Ignition Key Transponder Signal Is Not Received",
    },
    {
        id: "B1601",
        value: "PATS Received Incorrect Key-Code From Ignition Key Transponder",
    },
    {
        id: "B1602",
        value: "PATS Received Invalid Format Of Key-Code From Ignition Key Transponder",
    },
    {
        id: "B1603",
        value: "Lamp Anti-Theft Indicator Circuit Failure",
    },
    {
        id: "B1604",
        value: "Lamp Anti-Theft Indicator Circuit Open",
    },
    {
        id: "B1605",
        value: "Lamp Anti-Theft Indicator Circuit Short To Battery",
    },
    {
        id: "B1606",
        value: "Lamp Anti-Theft Indicator Circuit Short To Ground",
    },
    {
        id: "B1607",
        value: "Illuminated Entry Input Circuit Failure",
    },
    {
        id: "B1608",
        value: "Illuminated Entry Input Open Circuit",
    },
    {
        id: "B1609",
        value: "Illuminated Entry Input Short Circuit To Battery",
    },
    {
        id: "B1610",
        value: "Illuminated Entry Input Short Circuit To Ground",
    },
    {
        id: "B1611",
        value: "Wiper Rear Mode Select Switch Circuit Failure",
    },
    {
        id: "B1612",
        value: "Wiper Rear Mode Select Switch Circuit Open",
    },
    {
        id: "B1613",
        value: "Wiper Rear Mode Select Switch Circuit Short To Battery",
    },
    {
        id: "B1614",
        value: "Wiper Rear Mode Select Switch Circuit Short To Ground",
    },
    {
        id: "B1615",
        value: "Wiper Rear Disable Switch Circuit Failure",
    },
    {
        id: "B1616",
        value: "Wiper Rear Disable Switch Circuit Open",
    },
    {
        id: "B1617",
        value: "Wiper Rear Disable Switch Circuit Short To Battery",
    },
    {
        id: "B1618",
        value: "Wiper Rear Disable Switch Circuit Short To Ground",
    },
    {
        id: "B1619",
        value: "Wiper Rear Low Limit Input Circuit Failure",
    },
    {
        id: "B1620",
        value: "Wiper Rear Low Limit Input Circuit Open",
    },
    {
        id: "B1621",
        value: "Wiper Rear Low Limit Input Circuit Short To Battery",
    },
    {
        id: "B1622",
        value: "Wiper Rear Low Limit Input Circuit Short To Ground",
    },
    {
        id: "B1623",
        value: "Lamp Keypad Output Circuit Failure",
    },
    {
        id: "B1624",
        value: "Lamp Keypad Output Open Circuit",
    },
    {
        id: "B1625",
        value: "Lamp Keypad Output Short Circuit To Battery",
    },
    {
        id: "B1626",
        value: "Lamp Keypad Output Short Circuit To Ground",
    },
    {
        id: "B1627",
        value: "PRNDL Reverse Input Circuit Failure",
    },
    {
        id: "B1628",
        value: "PRNDL Reverse Input Open Circuit",
    },
    {
        id: "B1629",
        value: "PRNDL Reverse Input Short To Battery",
    },
    {
        id: "B1630",
        value: "PRNDL Reverse Input Short Circuit To Ground",
    },
    {
        id: "B1631",
        value: "Mirror Driver Left Circuit Failure",
    },
    {
        id: "B1632",
        value: "Mirror Driver Left Circuit Open",
    },
    {
        id: "B1633",
        value: "Mirror Driver Left Circuit Short To Battery",
    },
    {
        id: "B1634",
        value: "Mirror Driver Left Circuit Short To Ground",
    },
    {
        id: "B1635",
        value: "Mirror Driver Right Circuit Failure",
    },
    {
        id: "B1636",
        value: "Mirror Driver Right Circuit Open",
    },
    {
        id: "B1637",
        value: "Mirror Driver Right Circuit Short To Battery",
    },
    {
        id: "B1638",
        value: "Mirror Driver Right Short To Ground",
    },
    {
        id: "B1639",
        value: "Mirror Passenger Left Circuit Failure",
    },
    {
        id: "B1640",
        value: "Mirror Passenger Left Circuit Open",
    },
    {
        id: "B1641",
        value: "Mirror Passenger Left Circuit Short To Battery",
    },
    {
        id: "B1642",
        value: "Mirror Passenger Left Circuit Short To Ground",
    },
    {
        id: "B1643",
        value: "Mirror Passenger Right Circuit Failure",
    },
    {
        id: "B1644",
        value: "Mirror Passenger Right Circuit Open",
    },
    {
        id: "B1645",
        value: "Mirror Passenger Right Circuit Short To Battery",
    },
    {
        id: "B1646",
        value: "Mirror Passenger Right Circuit Short To Ground",
    },
    {
        id: "B1647",
        value: "Seat Driver Recline Forward Circuit Failure",
    },
    {
        id: "B1648",
        value: "Seat Driver Recline Forward Circuit Open",
    },
    {
        id: "B1649",
        value: "Seat Driver Recline Forward Circuit Short To Battery",
    },
    {
        id: "B1650",
        value: "Seat Driver Recline Forward Circuit Short To Ground",
    },
    {
        id: "B1651",
        value: "Seat Driver Recline Backward Circuit Failure",
    },
    {
        id: "B1652",
        value: "Seat Driver Recline Backward Circuit Open",
    },
    {
        id: "B1653",
        value: "Seat Driver Recline Backward Circuit Short To Battery",
    },
    {
        id: "B1654",
        value: "Seat Driver Recline Backward Circuit Short To Ground",
    },
    {
        id: "B1655",
        value: "Seat Driver Rear Up  Circuit Failure",
    },
    {
        id: "B1656",
        value: "Seat Driver Rear Up Circuit Open",
    },
    {
        id: "B1657",
        value: "Seat Driver Rear Up Circuit Short To Battery",
    },
    {
        id: "B1658",
        value: "Seat Driver Rear Up Circuit Short To Ground",
    },
    {
        id: "B1659",
        value: "Seat Driver Front Up Circuit Failure",
    },
    {
        id: "B1660",
        value: "Seat Driver Front Up Circuit Open",
    },
    {
        id: "B1661",
        value: "Seat Driver Front Up Circuit Short To Battery",
    },
    {
        id: "B1662",
        value: "Seat Driver Front Up Circuit Short To Ground",
    },
    {
        id: "B1663",
        value: "Seat Driver Front Up/Down Motor Stalled",
    },
    {
        id: "B1664",
        value: "Seat Driver Rear Up/Down Motor Stalled",
    },
    {
        id: "B1665",
        value: "Seat Driver Forward/Backward Motor Stalled",
    },
    {
        id: "B1666",
        value: "Seat Driver Recline Motor Stalled",
    },
    {
        id: "B1667",
        value: "Mirror Driver Up/Down Motor Stalled",
    },
    {
        id: "B1668",
        value: "Mirror Driver Right/Left Motor Stalled",
    },
    {
        id: "B1669",
        value: "Mirror Passenger Up/Down Motor Stalled",
    },
    {
        id: "B1670",
        value: "Mirror Passenger Right/Left Motor Stalled",
    },
    {
        id: "B1671",
        value: "Battery Module Voltage Out Of Range",
    },
    {
        id: "B1672",
        value: "Seat Driver Occupied Input Circuit Failure",
    },
    {
        id: "B1673",
        value: "Seat Driver Occupied Input Circuit Open",
    },
    {
        id: "B1674",
        value: "Seat Driver Occupied Input Circuit Short To Battery",
    },
    {
        id: "B1675",
        value: "Seat Driver Occupied Input Circuit Short To Ground",
    },
    {
        id: "B1676",
        value: "Battery Pack Voltage Out Of Range",
    },
    {
        id: "B1677",
        value: "Alarm Panic Input Circuit Failure",
    },
    {
        id: "B1678",
        value: "Alarm Panic Input Circuit Open",
    },
    {
        id: "B1679",
        value: "Alarm Panic Input Circuit Short To Battery",
    },
    {
        id: "B1680",
        value: "Alarm Panic Input Circuit Short To Ground",
    },
    {
        id: "B1681",
        value: "PATS Transceiver Module Signal Is Not Received",
    },
    {
        id: "B1682",
        value: "PATS Is Disabled (Check Link Between PATS And Transponder)",
    },
    {
        id: "B1683",
        value: "Mirror Driver/Passenger Switch Circuit Failure",
    },
    {
        id: "B1684",
        value: "Mirror Driver/Passenger Switch Circuit Open",
    },
    {
        id: "B1685",
        value: "Lamp Dome Input Circuit Failure",
    },
    {
        id: "B1686",
        value: "Lamp Dome Input Circuit Open",
    },
    {
        id: "B1687",
        value: "Lamp Dome Input Circuit Short To Battery",
    },
    {
        id: "B1688",
        value: "Lamp Dome Input Circuit Short To Ground",
    },
    {
        id: "B1689",
        value: "Autolamp Delay Circuit Failure",
    },
    {
        id: "B1690",
        value: "Autolamp Delay Circuit Open",
    },
    {
        id: "B1691",
        value: "Autolamp Delay Circuit Short To Battery",
    },
    {
        id: "B1692",
        value: "Autolamp Delay Circuit Short To Ground",
    },
    {
        id: "B1693",
        value: "Autolamp On Circuit Failure",
    },
    {
        id: "B1694",
        value: "Autolamp On Circuit Open",
    },
    {
        id: "B1695",
        value: "Autolamp On Circuit Short To Battery",
    },
    {
        id: "B1696",
        value: "Autolamp On Circuit Short To Ground",
    },
    {
        id: "B1697",
        value: "Mirror Driver/Passenger Switch Circuit Short To Battery",
    },
    {
        id: "B1698",
        value: "Mirror Driver/Passenger Switch Circuit Short To Ground",
    },
    {
        id: "B1701",
        value: "Seat Driver Recline Forward Switch Circuit Failure",
    },
    {
        id: "B1702",
        value: "Seat Driver Recline Forward Switch Circuit Open",
    },
    {
        id: "B1703",
        value: "Seat Driver Recline Forward Switch Circuit Short To Battery",
    },
    {
        id: "B1704",
        value: "Seat Driver Recline Forward Switch Circuit Short To Ground",
    },
    {
        id: "B1705",
        value: "Seat Driver Recline Rearward Switch Circuit Failure",
    },
    {
        id: "B1706",
        value: "Seat Driver Recline Rearward Switch Circuit Open",
    },
    {
        id: "B1707",
        value: "Seat Driver Recline Rearward Switch Circuit Short To Battery",
    },
    {
        id: "B1708",
        value: "Seat Driver Recline Rearward Switch Circuit Short To Ground",
    },
    {
        id: "B1709",
        value: "Seat Driver Front Up Switch Circuit Failure",
    },
    {
        id: "B1710",
        value: "Seat Driver Front Up Switch Circuit Open",
    },
    {
        id: "B1711",
        value: "Seat Driver Front Up Switch Circuit Short To Battery",
    },
    {
        id: "B1712",
        value: "Seat Driver Front Up Switch Circuit Short To Ground",
    },
    {
        id: "B1713",
        value: "Seat Driver Front Down Switch Circuit Failure",
    },
    {
        id: "B1714",
        value: "Seat Driver Front Down Switch Circuit Open",
    },
    {
        id: "B1715",
        value: "Seat Driver Front Down Switch Circuit Short To Battery",
    },
    {
        id: "B1716",
        value: "Seat Driver Front Down Switch Circuit Short To Ground",
    },
    {
        id: "B1717",
        value: "Seat Driver Forward Switch Circuit Failure",
    },
    {
        id: "B1718",
        value: "Seat Driver Forward Switch Circuit Open",
    },
    {
        id: "B1719",
        value: "Seat Driver Forward Switch Circuit Short To Battery",
    },
    {
        id: "B1720",
        value: "Seat Driver Forward Switch Circuit Short To Ground",
    },
    {
        id: "B1721",
        value: "Seat Driver Rearward Switch Circuit Failure",
    },
    {
        id: "B1722",
        value: "Seat Driver Rearward Switch Circuit Open",
    },
    {
        id: "B1723",
        value: "Seat Driver Rearward Switch Circuit Short To Battery",
    },
    {
        id: "B1724",
        value: "Seat Driver Rearward Switch Circuit Short To Ground",
    },
    {
        id: "B1725",
        value: "Seat Driver Rear Up Switch Circuit Failure",
    },
    {
        id: "B1726",
        value: "Seat Driver Rear Up Switch Circuit Open",
    },
    {
        id: "B1727",
        value: "Seat Driver Rear Up Switch Circuit Short To Battery",
    },
    {
        id: "B1728",
        value: "Seat Driver Rear Up Switch Circuit Short To Ground",
    },
    {
        id: "B1729",
        value: "Seat Driver Rear Down Switch Circuit Failure",
    },
    {
        id: "B1730",
        value: "Seat Driver Rear Down Switch Circuit Open",
    },
    {
        id: "B1731",
        value: "Seat Driver Rear Down Switch Circuit Short To Battery",
    },
    {
        id: "B1732",
        value: "Seat Driver Rear Down Switch Circuit Short To Ground",
    },
    {
        id: "B1733",
        value: "Mirror Driver Vertical Switch Circuit Failure",
    },
    {
        id: "B1734",
        value: "Mirror Driver Vertical Switch Circuit Open",
    },
    {
        id: "B1735",
        value: "Mirror Driver Vertical Switch Circuit Short To Battery",
    },
    {
        id: "B1736",
        value: "Mirror Driver Vertical Switch Circuit Short To Ground",
    },
    {
        id: "B1737",
        value: "Mirror Driver Horizontal Switch Circuit Failure",
    },
    {
        id: "B1738",
        value: "Mirror Driver Horizontal Switch Circuit Open",
    },
    {
        id: "B1739",
        value: "Mirror Driver Horizontal Switch Circuit Short To Battery",
    },
    {
        id: "B1740",
        value: "Mirror Driver Horizontal Switch Circuit Short To Ground",
    },
    {
        id: "B1741",
        value: "Mirror Passenger Vertical Switch Circuit Failure",
    },
    {
        id: "B1742",
        value: "Mirror Passenger Vertical Switch Circuit Open",
    },
    {
        id: "B1743",
        value: "Mirror Passenger Vertical Switch Circuit Short To Battery",
    },
    {
        id: "B1744",
        value: "Mirror Passenger Vertical Switch Circuit Short To Ground",
    },
    {
        id: "B1745",
        value: "Mirror Passenger Horizontal Switch Circuit Failure",
    },
    {
        id: "B1746",
        value: "Mirror Passenger Horizontal Switch Circuit Open",
    },
    {
        id: "B1747",
        value: "Mirror Passenger Horizontal Switch Circuit Short To Battery",
    },
    {
        id: "B1748",
        value: "Mirror Passenger Horizontal Switch Circuit Short To Ground",
    },
    {
        id: "B1749",
        value: "Park/Neutral Switch Circuit Failure",
    },
    {
        id: "B1750",
        value: "Park/Neutral Switch Circuit Open",
    },
    {
        id: "B1751",
        value: "Park/Neutral Switch Circuit Short To Battery",
    },
    {
        id: "B1752",
        value: "Park/Neutral Switch Circuit Short To Ground",
    },
    {
        id: "B1753",
        value: "Hazard Flash Output Circuit Failure",
    },
    {
        id: "B1754",
        value: "Hazard Flash Output Circuit Open",
    },
    {
        id: "B1755",
        value: "Hazard Flash Output Circuit Short Battery",
    },
    {
        id: "B1756",
        value: "Hazard Flash Output Circuit Short To Ground",
    },
    {
        id: "B1757",
        value: "Seat Driver Rear Down  Circuit Failure",
    },
    {
        id: "B1758",
        value: "Seat Driver Rear Down Circuit Open",
    },
    {
        id: "B1759",
        value: "Seat Driver Rear Down Circuit Short To Battery",
    },
    {
        id: "B1760",
        value: "Seat Driver Rear Down Circuit Short To Ground",
    },
    {
        id: "B1761",
        value: "Seat Driver Front Down  Circuit Failure",
    },
    {
        id: "B1762",
        value: "Seat Driver Front Down Circuit Open",
    },
    {
        id: "B1763",
        value: "Seat Driver Front Down Circuit Short To Battery",
    },
    {
        id: "B1764",
        value: "Seat Driver Front Down Circuit Short To Ground",
    },
    {
        id: "B1765",
        value: "Seat Driver Forward Circuit Failure",
    },
    {
        id: "B1766",
        value: "Seat Driver Forward Circuit Open",
    },
    {
        id: "B1767",
        value: "Seat Driver Forward Circuit Short To Battery",
    },
    {
        id: "B1768",
        value: "Seat Driver Forward Circuit Short To Ground",
    },
    {
        id: "B1769",
        value: "Seat Driver Backward Circuit Failure",
    },
    {
        id: "B1770",
        value: "Seat Driver Backward Circuit Open",
    },
    {
        id: "B1771",
        value: "Seat Driver Backward Circuit Short To Battery",
    },
    {
        id: "B1772",
        value: "Seat Driver Backward Circuit Short To Ground",
    },
    {
        id: "B1773",
        value: "Mirror Driver Up Circuit Failure",
    },
    {
        id: "B1774",
        value: "Mirror Driver Up Circuit Open",
    },
    {
        id: "B1775",
        value: "Mirror Driver Up Circuit Short To Battery",
    },
    {
        id: "B1776",
        value: "Mirror Driver Up Circuit Short To Ground",
    },
    {
        id: "B1778",
        value: "Mirror Driver Down Circuit Failure",
    },
    {
        id: "B1779",
        value: "Mirror Driver Down Circuit Open",
    },
    {
        id: "B1780",
        value: "Mirror Driver Down Circuit Short To Battery",
    },
    {
        id: "B1781",
        value: "Mirror Driver Down Short To Ground",
    },
    {
        id: "B1782",
        value: "Mirror Passenger Up Circuit Failure",
    },
    {
        id: "B1783",
        value: "Mirror Passenger Up Circuit Open",
    },
    {
        id: "B1784",
        value: "Mirror Passenger Up Circuit Short To Battery",
    },
    {
        id: "B1785",
        value: "Mirror Passenger Up Circuit Short To Ground",
    },
    {
        id: "B1786",
        value: "Mirror Passenger Down Circuit Failure",
    },
    {
        id: "B1787",
        value: "Mirror Passenger Down Circuit Open",
    },
    {
        id: "B1788",
        value: "Mirror Passenger Down Circuit Short To Battery",
    },
    {
        id: "B1789",
        value: "Mirror Passenger Down Circuit Short To Ground",
    },
    {
        id: "B1790",
        value: "Autolamp Sensor Input Circuit Failure",
    },
    {
        id: "B1791",
        value: "Autolamp Sensor Input Circuit Open",
    },
    {
        id: "B1792",
        value: "Autolamp Sensor Input Circuit Short To Battery",
    },
    {
        id: "B1793",
        value: "Autolamp Sensor Input Circuit Short To Ground",
    },
    {
        id: "B1794",
        value: "Lamp Headlamp Low-Beam Circuit Failure",
    },
    {
        id: "B1795",
        value: "Lamp Headlamp Low-Beam Circuit Open",
    },
    {
        id: "B1796",
        value: "Lamp Headlamp Low-Beam Circuit Short To Battery",
    },
    {
        id: "B1797",
        value: "Lamp Headlamp Low-Beam Circuit Short To Ground",
    },
    {
        id: "B1798",
        value: "Lamp Turn Signal Front Output Circuit Failure",
    },
    {
        id: "B1799",
        value: "Lamp Turn Signal Front Output Circuit Open",
    },
    {
        id: "B1800",
        value: "Lamp Turn Signal Front Output Circuit Short To Battery",
    },
    {
        id: "B1801",
        value: "Lamp Turn Signal Front Output Circuit Short To Ground",
    },
    {
        id: "B1802",
        value: "Lamp Turn Signal Rear Output Circuit Failure",
    },
    {
        id: "B1803",
        value: "Lamp Turn Signal Rear Output Circuit Open",
    },
    {
        id: "B1804",
        value: "Lamp Turn Signal Rear Output Circuit Short To Battery",
    },
    {
        id: "B1805",
        value: "Lamp Turn Signal Rear Output Circuit Short To Ground",
    },
    {
        id: "B1806",
        value: "Lamp Tail Output Circuit Failure",
    },
    {
        id: "B1807",
        value: "Lamp Tail Output Circuit Open",
    },
    {
        id: "B1808",
        value: "Lamp Tail Output Circuit Short To Battery",
    },
    {
        id: "B1809",
        value: "Lamp Tail Output Circuit Short To Ground",
    },
    {
        id: "B1810",
        value: "Lamp Backup Switch Input Circuit Failure",
    },
    {
        id: "B1811",
        value: "Lamp Backup Switch Input Circuit Open",
    },
    {
        id: "B1812",
        value: "Lamp Backup Switch Input Circuit Short To Battery",
    },
    {
        id: "B1813",
        value: "Lamp Backup Switch Input Circuit Short To Ground",
    },
    {
        id: "B1814",
        value: "Wiper Rear Motor Down Relay Coil Circuit Failure",
    },
    {
        id: "B1815",
        value: "Wiper Rear Motor Down Relay Coil Circuit Open",
    },
    {
        id: "B1816",
        value: "Wiper Rear Motor Down Relay Coil Circuit Short To Battery",
    },
    {
        id: "B1817",
        value: "Wiper Rear Motor Down Relay Coil Circuit Short To Ground",
    },
    {
        id: "B1818",
        value: "Wiper Rear Motor Up Relay Coil Circuit Failure",
    },
    {
        id: "B1819",
        value: "Wiper Rear Motor Up Relay Coil Circuit Open",
    },
    {
        id: "B1820",
        value: "Wiper Rear Motor Up Relay Coil Circuit Short To Battery",
    },
    {
        id: "B1821",
        value: "Wiper Rear Motor Up Relay Coil Circuit Short To Ground",
    },
    {
        id: "B1822",
        value: "Wiper Rear Park Sense Input Circuit Failure",
    },
    {
        id: "B1823",
        value: "Wiper Rear Park Sense Input Circuit Open",
    },
    {
        id: "B1824",
        value: "Wiper Rear Park Sense Input Circuit Short To Battery",
    },
    {
        id: "B1825",
        value: "Wiper Rear Park Sense Input Circuit Short To Ground",
    },
    {
        id: "B1826",
        value: "Wiper Rear High Limit Input Circuit Failure",
    },
    {
        id: "B1827",
        value: "Wiper Rear High Limit Input Circuit Open",
    },
    {
        id: "B1828",
        value: "Wiper Rear High Limit Input Circuit Short To Battery",
    },
    {
        id: "B1829",
        value: "Wiper Rear High Limit Input Circuit Short To Ground",
    },
    {
        id: "B1830",
        value: "Door Unlock Disarm Switch Circuit Failure",
    },
    {
        id: "B1831",
        value: "Door Unlock Disarm Switch Circuit Open",
    },
    {
        id: "B1832",
        value: "Door Unlock Disarm Switch Circuit Short To Battery",
    },
    {
        id: "B1833",
        value: "Door Unlock Disarm Switch Circuit Short To Ground",
    },
    {
        id: "B1834",
        value: "Door Unlock Disarm Output Circuit Failure",
    },
    {
        id: "B1835",
        value: "Door Unlock Disarm Output Circuit Open",
    },
    {
        id: "B1836",
        value: "Door Unlock Disarm Output Circuit Short To Battery",
    },
    {
        id: "B1837",
        value: "Door Unlock Disarm Output Circuit Short To Ground",
    },
    {
        id: "B1838",
        value: "Battery Saver Power Relay Circuit Failure",
    },
    {
        id: "B1839",
        value: "Wiper Rear Motor Circuit Failure",
    },
    {
        id: "B1840",
        value: "Wiper Front Power Circuit Failure",
    },
    {
        id: "B1841",
        value: "Wiper Front Power Circuit Open",
    },
    {
        id: "B1842",
        value: "Wiper Front Power Circuit Short To Battery",
    },
    {
        id: "B1843",
        value: "Wiper Front Power Circuit Short To Ground",
    },
    {
        id: "B1844",
        value: "Phone Handset Circuit Failure",
    },
    {
        id: "B1845",
        value: "Ignition Tamper Circuit Failure",
    },
    {
        id: "B1846",
        value: "Ignition Tamper Circuit Open",
    },
    {
        id: "B1847",
        value: "Ignition Tamper Circuit Short To Battery",
    },
    {
        id: "B1848",
        value: "Ignition Tamper Circuit Short To Ground",
    },
    {
        id: "B1849",
        value: "Climate Control Temperature Differential Circuit Failure",
    },
    {
        id: "B1850",
        value: "Climate Control Temperature Differential Circuit Open",
    },
    {
        id: "B1851",
        value: "Climate Control Temperature Differential Circuit Short To Battery",
    },
    {
        id: "B1852",
        value: "Climate Control Temperature Differential Circuit Short To Ground",
    },
    {
        id: "B1853",
        value: "Climate Control Air Temperature Internal Sensor Motor Circuit Failure",
    },
    {
        id: "B1854",
        value: "Climate Control Air Temperature Internal Sensor Motor Circuit Open",
    },
    {
        id: "B1855",
        value: "Climate Control Air Temperature Internal Sensor Motor Circuit Short To Battery",
    },
    {
        id: "B1856",
        value: "Climate Control Air Temperature Internal Sensor Motor Circuit Short To Ground",
    },
    {
        id: "B1857",
        value: "Climate Control On/Off Switch Circuit Failure",
    },
    {
        id: "B1858",
        value: "Climate Control A/C Pressure Switch Circuit Failure",
    },
    {
        id: "B1859",
        value: "Climate Control A/C Pressure Switch Circuit Open",
    },
    {
        id: "B1860",
        value: "Climate Control A/C Pressure Switch Circuit Short To Battery",
    },
    {
        id: "B1861",
        value: "Climate Control A/C Pressure Switch Circuit Short To Ground",
    },
    {
        id: "B1862",
        value: "Climate Control A/C Lock Sensor Failure",
    },
    {
        id: "B1863",
        value: "Ground ECU Circuit Open",
    },
    {
        id: "B1864",
        value: "Battery Power Supply ECU Circuit Failure",
    },
    {
        id: "B1865",
        value: "Battery Power Supply ECU Circuit Open",
    },
    {
        id: "B1866",
        value: "Battery Power Supply ECU Circuit Short To Battery",
    },
    {
        id: "B1867",
        value: "Battery Power Supply ECU Circuit Short To Ground",
    },
    {
        id: "B1868",
        value: "Lamp Air Bag Warning Indicator Circuit Failure",
    },
    {
        id: "B1869",
        value: "Lamp Air Bag Warning Indicator Circuit Open",
    },
    {
        id: "B1870",
        value: "Lamp Air Bag Warning Indicator Circuit Short To Battery",
    },
    {
        id: "B1871",
        value: "Passenger Air Bag Disable Module Fault",
    },
    {
        id: "B1872",
        value: "Turn Signal / Hazard Power Feed Circuit Short To Battery",
    },
    {
        id: "B1873",
        value: "Turn Signal / Hazard Power Feed Circuit Short To Ground",
    },
    {
        id: "B1874",
        value: "Cellular Phone Handset Not Present",
    },
    {
        id: "B1875",
        value: "Turn Signal / Hazard Switch Signal Circuit Failure",
    },
    {
        id: "B1876",
        value: "Seatbelt Driver Pretensioner Circuit Failure",
    },
    {
        id: "B1877",
        value: "Seatbelt Driver Pretensioner Circuit Open",
    },
    {
        id: "B1878",
        value: "Seatbelt Driver Pretensioner Circuit Short to Battery",
    },
    {
        id: "B1879",
        value: "Seatbelt Driver Pretensioner Circuit Short to Ground",
    },
    {
        id: "B1880",
        value: "Seatbelt Passenger Pretensioner Circuit Failure",
    },
    {
        id: "B1881",
        value: "Seatbelt Passenger Pretensioner Circuit Open",
    },
    {
        id: "B1882",
        value: "Seatbelt Passenger Pretensioner Circuit Short to Battery",
    },
    {
        id: "B1883",
        value: "Seatbelt Passenger Pretensioner Circuit Short to Ground",
    },
    {
        id: "B1884",
        value: "PAD Warning Lamp Inoperative",
    },
    {
        id: "B1885",
        value: "Seatbelt Driver Pretensioner Circuit Resistance Low on Squib",
    },
    {
        id: "B1886",
        value: "Seatbelt Passenger Pretensioner Circuit Resistance Low on Squib",
    },
    {
        id: "B1887",
        value: "Air Bag Driver Circuit Resistance Low or Shorted Together",
    },
    {
        id: "B1888",
        value: "Air Bag Passenger Circuit Resistance Low or Shorted Together",
    },
    {
        id: "B1889",
        value: "Passenger Airbag Disable Module Sensor Obstructed",
    },
    {
        id: "B1890",
        value: "PAD Warning Lamp Circuit Short to Battery",
    },
    {
        id: "B1891",
        value: "Air Bag Tone Warning Indicator Circuit Short to Battery",
    },
    {
        id: "B1892",
        value: "Air Bag Tone Warning Indicator Circuit Failure",
    },
    {
        id: "B1893",
        value: "GPS Antenna Open Circuit",
    },
    {
        id: "B1894",
        value: "Wiper Rear Motor Speed Sense Circuit Failure",
    },
    {
        id: "B1897",
        value: "Horn Switch Circuit Failure",
    },
    {
        id: "B1898",
        value: "Chime Input #2 Circuit Short to Ground",
    },
    {
        id: "B1899",
        value: "Microphone Input Signal Circuit Open",
    },
    {
        id: "B1900",
        value: "Driver Side Airbag Fault",
    },
    {
        id: "B1901",
        value: "Air Bag Crash Sensor #1 Feed/Return Circuit Short To Ground",
    },
    {
        id: "B1902",
        value: "Air Bag Crash Sensor #1 Ground Circuit Failure",
    },
    {
        id: "B1903",
        value: "Air Bag Crash Sensor #1 Ground Circuit Short To Battery",
    },
    {
        id: "B1904",
        value: "Air Bag Crash Sensor #2 Feed/Return Circuit Failure",
    },
    {
        id: "B1905",
        value: "Air Bag Crash Sensor #2 Feed/Return Circuit Short To Battery",
    },
    {
        id: "B1906",
        value: "Air Bag Crash Sensor #2 Feed/Return Circuit Short To Ground",
    },
    {
        id: "B1907",
        value: "Air Bag Crash Sensor #2 Ground Circuit Failure",
    },
    {
        id: "B1908",
        value: "Air Bag Crash Sensor #2 Ground Circuit Short To Battery",
    },
    {
        id: "B1909",
        value: "Air Bag Crash Sensor #2 Ground Circuit Short To Ground",
    },
    {
        id: "B1910",
        value: "Air Bag Diagnostic Monitor Ground Circuit Failure",
    },
    {
        id: "B1911",
        value: "Air Bag Diagnostic Monitor Ground Circuit Short To Battery",
    },
    {
        id: "B1912",
        value: "Air Bag Diagnostic Monitor Ground Circuit Short To Ground",
    },
    {
        id: "B1913",
        value: "Air Bag Driver/Passenger Circuit Short To Ground",
    },
    {
        id: "B1914",
        value: "Air Bag Crash Sensors #1 / #2  Circuit Short To Ground",
    },
    {
        id: "B1915",
        value: "Air Bag Driver Circuit Failure",
    },
    {
        id: "B1916",
        value: "Air Bag Driver Circuit Short To Battery",
    },
    {
        id: "B1917",
        value: "Air Bag Memory Clear Circuit Failure",
    },
    {
        id: "B1918",
        value: "Air Bag Memory Clear Circuit Open",
    },
    {
        id: "B1919",
        value: "Air Bag Memory Clear Circuit Short To Battery",
    },
    {
        id: "B1920",
        value: "Air Bag Passenger Circuit Failure",
    },
    {
        id: "B1921",
        value: "Air Bag Diagnostic Monitor Ground Circuit Open",
    },
    {
        id: "B1922",
        value: "Air Bag Safing Sensor Output Circuit Short To Battery",
    },
    {
        id: "B1923",
        value: "Air Bag Memory Clear Circuit Short To Ground",
    },
    {
        id: "B1924",
        value: "Air Bag Internal Diagnostic Monitor Fault or System Disarm Fault",
    },
    {
        id: "B1925",
        value: "Air Bag Passenger Circuit Short To Battery",
    },
    {
        id: "B1926",
        value: "Air Bag Passenger Pressure Switch Circuit Failure",
    },
    {
        id: "B1927",
        value: "Passenger Side Airbag Fault",
    },
    {
        id: "B1928",
        value: "Air Bag Safing Sensor Output Circuit Failure",
    },
    {
        id: "B1929",
        value: "Air Bag Safing Sensor Output Circuit Open",
    },
    {
        id: "B1930",
        value: "Air Bag Safing Sensor Output Circuit Short To Ground",
    },
    {
        id: "B1931",
        value: "Air Bag Crash Sensor #1 Feed/Return Circuit Failure",
    },
    {
        id: "B1932",
        value: "Air Bag Driver Circuit Open",
    },
    {
        id: "B1933",
        value: "Air Bag Passenger Circuit Open",
    },
    {
        id: "B1934",
        value: "Air Bag Driver Inflator Circuit Resistance Low on Squib",
    },
    {
        id: "B1935",
        value: "Air Bag Passenger Inflator Circuit Resistance Low on Squib",
    },
    {
        id: "B1936",
        value: "Air Bag Driver Circuit Short To Ground",
    },
    {
        id: "B1937",
        value: "Air Bag Passenger Pressure Switch Circuit Open",
    },
    {
        id: "B1938",
        value: "Air Bag Passenger Circuit Short To Ground",
    },
    {
        id: "B1939",
        value: "Air Bag Passenger Pressure Switch Circuit Short To Ground",
    },
    {
        id: "B1941",
        value: "Air Bag Crash Sensor #1 Feed/Return Circuit Open",
    },
    {
        id: "B1942",
        value: "Air Bag Crash Sensor #2 Feed/Return Circuit Open",
    },
    {
        id: "B1943",
        value: "Air Bag Crash Sensor #1 Ground Circuit Short To Ground",
    },
    {
        id: "B1944",
        value: "Air Bag Crash Sensor #1 Ground Circuit Open",
    },
    {
        id: "B1945",
        value: "Air Bag Crash Sensor #2 Ground Circuit Open",
    },
    {
        id: "B1946",
        value: "Climate Control A/C Post Evaporator Sensor Circuit Failure",
    },
    {
        id: "B1947",
        value: "Climate Control A/C Post Evaporator Sensor Circuit Short To Ground",
    },
    {
        id: "B1948",
        value: "Climate Control Water Temperature Sensor Circuit Failure",
    },
    {
        id: "B1949",
        value: "Climate Control Water Temperature Sensor Circuit Short To Ground",
    },
    {
        id: "B1950",
        value: "Seat Rear Up/Down Potentiometer Feedback Circuit Failure",
    },
    {
        id: "B1951",
        value: "Seat Rear Up/Down Potentiometer Feedback Circuit Open",
    },
    {
        id: "B1952",
        value: "Seat Rear Up/Down Potentiometer Feedback Circuit Short To Battery",
    },
    {
        id: "B1953",
        value: "Seat Rear Up/Down Potentiometer Feedback Circuit Short To Ground",
    },
    {
        id: "B1954",
        value: "Seat Front Up/Down Potentiometer Feedback Circuit Failure",
    },
    {
        id: "B1955",
        value: "Seat Front Up/Down Potentiometer Feedback Circuit Open",
    },
    {
        id: "B1956",
        value: "Seat Front Up/Down Potentiometer Feedback Circuit Short To Battery",
    },
    {
        id: "B1957",
        value: "Seat Front Up/Down Potentiometer Feedback Circuit Short To Ground",
    },
    {
        id: "B1958",
        value: "Seat Recline Forward/Backward Potentiometer Feedback Circuit Failure",
    },
    {
        id: "B1959",
        value: "Seat Recline Forward/Backward Potentiometer Feedback Circuit Open",
    },
    {
        id: "B1960",
        value: "Seat Recline Forward/Backward Potentiometer Feedback Circuit Short To Battery",
    },
    {
        id: "B1961",
        value: "Seat Recline Forward/Backward Potentiometer Feedback Circuit Short To Ground",
    },
    {
        id: "B1962",
        value: "Seat Horizontal Forward/Rearward Potentiometer Feedback Circuit Failure",
    },
    {
        id: "B1963",
        value: "Seat Horizontal Forward/Rearward Potentiometer Feedback Circuit Open",
    },
    {
        id: "B1964",
        value: "Seat Horizontal Forward/Rearward Potentiometer Feedback Circuit Short To Battery",
    },
    {
        id: "B1965",
        value: "Seat Horizontal Forward/Rearward Potentiometer Feedback Circuit Short To Ground",
    },
    {
        id: "B1966",
        value: "A/C Post Heater Sensor Circuit Failure",
    },
    {
        id: "B1967",
        value: "A/C Post Heater Sensor Circuit Short To Ground",
    },
    {
        id: "B1968",
        value: "A/C Water Pump Detection Circuit Failure",
    },
    {
        id: "B1969",
        value: "A/C Clutch Magnetic Control Circuit Failure",
    },
    {
        id: "B1970",
        value: "Passenger Seatback Forward Switch Circuit Short to Ground",
    },
    {
        id: "B1971",
        value: "Passenger Seatback Rearward Switch Circuit Short to Ground",
    },
    {
        id: "B1972",
        value: "Passenger Rear Seat Up Switch Circuit Short to Battery",
    },
    {
        id: "B1973",
        value: "Passenger Rear Seat Down Switch Circuit Short to Battery",
    },
    {
        id: "B1979",
        value: "Passenger Seat Rearward Switch Circuit Short to Battery",
    },
    {
        id: "B1980",
        value: "Bulb - Outage Condition Detected",
    },
    {
        id: "B1981",
        value: "Memory Off Switch Circuit Short to Battery",
    },
    {
        id: "B1984",
        value: "Seat Switch Lumbar Inflate Circuit Failure",
    },
    {
        id: "B1985",
        value: "Seat Switch Lumbar Deflate Circuit Failure",
    },
    {
        id: "B1987",
        value: "Pedal Forward / Rearward Motor Stalled",
    },
    {
        id: "B1988",
        value: "Pedal Position Forward Switch Circuit Short to Battery",
    },
    {
        id: "B1989",
        value: "Pedal Position Rearward Switch Circuit Short to Battery",
    },
    {
        id: "B1990",
        value: "Pedal Forward / Rearward Potentiometer Feedback Circuit Failure",
    },
    {
        id: "B1991",
        value: "Pedal Forward / Rearward Potentiometer Feedback Circuit Short to Battery",
    },
    {
        id: "B1992",
        value: "Driver Side",
    },
    {
        id: "B1993",
        value: "Driver Side",
    },
    {
        id: "B1994",
        value: "Driver Side",
    },
    {
        id: "B1995",
        value: "Driver Side",
    },
    {
        id: "B1996",
        value: "Passenger Side",
    },
    {
        id: "B1997",
        value: "Passenger Side",
    },
    {
        id: "B1998",
        value: "Passenger Side",
    },
    {
        id: "B1999",
        value: "Passenger Side",
    },
    {
        id: "B2100",
        value: "Door Driver Key Cylinder Switch Failure",
    },
    {
        id: "B2101",
        value: "Head Rest Switch Circuit Failure",
    },
    {
        id: "B2102",
        value: "Antenna Circuit Short to Ground",
    },
    {
        id: "B2103",
        value: "Antenna Not Connected",
    },
    {
        id: "B2104",
        value: "Door Passenger Key Cylinder Switch Failure",
    },
    {
        id: "B2105",
        value: "Throttle Position Input Out of Range Low",
    },
    {
        id: "B2106",
        value: "Throttle Position Input Out of Range High",
    },
    {
        id: "B2107",
        value: "Front Wiper Motor Relay Circuit Short to Vbatt",
    },
    {
        id: "B2108",
        value: "Trunk Key Cylinder Switch Failure",
    },
    {
        id: "B2109",
        value: "Heated Wind Shield Relay Short to Vbatt (changed from Failure 2/6/97)",
    },
    {
        id: "B2110",
        value: "Front Wiper Motor Relay Circuit Open (changed from Failure 2/6/97)",
    },
    {
        id: "B2111",
        value: "All Door Lock Input Short to Ground",
    },
    {
        id: "B2112",
        value: "Door Driver Set Switch Stuck Failure",
    },
    {
        id: "B2113",
        value: "Heated Windshield Input Short to Ground",
    },
    {
        id: "B2114",
        value: "Front Washer Input Short to Ground",
    },
    {
        id: "B2115",
        value: "Rear Washer Input Short to Ground",
    },
    {
        id: "B2116",
        value: "Door Driver Reset Switch Stuck Failure",
    },
    {
        id: "B2117",
        value: "Driver Side",
    },
    {
        id: "B2118",
        value: "Passenger Side",
    },
    {
        id: "B2119",
        value: "Compressor Failure",
    },
    {
        id: "B2120",
        value: "Door Passenger Set Switch Stuck Failure",
    },
    {
        id: "B2122",
        value: "Driver Side Satellite Communication Circuit Short to Ground",
    },
    {
        id: "B2123",
        value: "Passenger Side Satellite Communication Circuit Short to Ground",
    },
    {
        id: "B2124",
        value: "Door Passenger Reset Switch Stuck Failure",
    },
    {
        id: "B2128",
        value: "Central Lock Motor Failure",
    },
    {
        id: "B2129",
        value: "Central Lock Feedback Failure",
    },
    {
        id: "B2130",
        value: "Double Lock Timeout Failure",
    },
    {
        id: "B2131",
        value: "Double Lock Feedback Failure",
    },
    {
        id: "B2132",
        value: "Dimmer switch Circuit Short to Gnd",
    },
    {
        id: "B2133",
        value: "Brake Motor Warning lamp Circuit Failure",
    },
    {
        id: "B2134",
        value: "Brake Motor Warning lamp Circuit Short to Vbatt",
    },
    {
        id: "B2135",
        value: "Park Brake Applied Warning Lamp Circuit Failure",
    },
    {
        id: "B2136",
        value: "Park Brake Applied Warning Lamp Circuit Short To Battery",
    },
    {
        id: "B2139",
        value: "Data Mismatch (receive data does not match what was expected)",
    },
    {
        id: "B2141",
        value: "NVM Configuration Failure",
    },
    {
        id: "B2142",
        value: "NVM TIC Failure",
    },
    {
        id: "B2143",
        value: "NVM Memory Failure",
    },
    {
        id: "B2144",
        value: "NVM Alarm Data Failure",
    },
    {
        id: "B2145",
        value: "NVM RF HR Failure",
    },
    {
        id: "B2146",
        value: "Seat Recline Motor Position Out of Range",
    },
    {
        id: "B2148",
        value: "PWM Input Circuit Failure",
    },
    {
        id: "B2149",
        value: "Seat Front Vertical Motor Position Out of Range",
    },
    {
        id: "B2150",
        value: "Power Supply #1 Circuit Short to Ground",
    },
    {
        id: "B2151",
        value: "Power Supply #2 Circuit Short to Ground",
    },
    {
        id: "B2152",
        value: "Seat Rear Vertical Motor Position Out of Range",
    },
    {
        id: "B2153",
        value: "Rear Echo Sensor Circuit Failure",
    },
    {
        id: "B2154",
        value: "Front Echo Sensor Circuit Failure",
    },
    {
        id: "B2155",
        value: "Seat Horizontal Motor Position Out of Range",
    },
    {
        id: "B2156",
        value: "Rear Doppler Sensor Circuit Failure",
    },
    {
        id: "B2157",
        value: "Front Doppler Sensor Circuit Failure",
    },
    {
        id: "B2158",
        value: "Seat Recline Motor Memory Position Out of Range",
    },
    {
        id: "B2159",
        value: "Memory #1 output Short to Ground",
    },
    {
        id: "B2160",
        value: "Memory #1 output Short to VBatt",
    },
    {
        id: "B2161",
        value: "Seat Front Vertical Motor Memory Position Out of Range",
    },
    {
        id: "B2162",
        value: "Data Mismatch #2 (receive data does not match what was expected)",
    },
    {
        id: "B2163",
        value: "Clutch Position Fault",
    },
    {
        id: "B2164",
        value: "Seat Rear Vertical Motor Memory Position Out of Range",
    },
    {
        id: "B2165",
        value: "Gear shift position Fault",
    },
    {
        id: "B2166",
        value: "Gear select position Fault",
    },
    {
        id: "B2167",
        value: "Seat Horizontal Motor Memory Position Out of Range",
    },
    {
        id: "B2168",
        value: "Unable to confirm Unlock Condition",
    },
    {
        id: "B2169",
        value: "Unable to confirm lock Condition",
    },
    {
        id: "B2170",
        value: "Steering Column Lock Switch Circuit Failure",
    },
    {
        id: "B2172",
        value: "Inertia Switch input Circuit Open",
    },
    {
        id: "B2174",
        value: "Window Driver Rear Remote Up Switch Short to Battery",
    },
    {
        id: "B2175",
        value: "A/C Request Signal Circuit Short to Ground",
    },
    {
        id: "B2176",
        value: "Overdrive switch circuit short to Vbatt",
    },
    {
        id: "B2177",
        value: "Interior Scanning Sensor Circuit Failure",
    },
    {
        id: "B2178",
        value: "Window Driver Rear Remote Down Switch Short to Battery",
    },
    {
        id: "B2179",
        value: 'Front Wiper Select Switch "A" Short to Ground',
    },
    {
        id: "B2180",
        value: 'Front Wiper Select Switch "B" Short to Ground',
    },
    {
        id: "B2181",
        value: 'Front Wiper Select Switch "C" Short to Ground',
    },
    {
        id: "B2182",
        value: "Window Passenger Front Remote Up Switch Short to Battery",
    },
    {
        id: "B2183",
        value: 'Front Wiper Select Switch "H" Short to Ground',
    },
    {
        id: "B2184",
        value: 'Front Wiper Select Switch "W" Short to Ground',
    },
    {
        id: "B2185",
        value: 'Rear Wiper Select Switch "D" Short to Ground',
    },
    {
        id: "B2186",
        value: "Window Passenger Front Remote Down Switch Short to Battery",
    },
    {
        id: "B2187",
        value: 'Rear Wiper Select Switch "B" Short to Ground',
    },
    {
        id: "B2188",
        value: 'Rear Wiper Select Switch "E" Short to Ground',
    },
    {
        id: "B2190",
        value: "Window Passenger Rear Remote Up Switch Short to Battery",
    },
    {
        id: "B2194",
        value: "Window Passenger Rear Remote Down Switch Short to Battery",
    },
    {
        id: "B2195",
        value: "Driver Window  Up / Down Power Circuit Short to Ground",
    },
    {
        id: "B2196",
        value: "Passenger Window Up / Down Power Circuit Short to Ground",
    },
    {
        id: "B2197",
        value: "TV Module Error",
    },
    {
        id: "B2198",
        value: "TrafficMaster Module Error",
    },
    {
        id: "B2199",
        value: "VICS Module Error",
    },
    {
        id: "B2200",
        value: "No Communication to TV Module (No Fitting of TV)",
    },
    {
        id: "B2201",
        value: "No Communication With Traffic MasterModule",
    },
    {
        id: "B2202",
        value: "No Communication to VICS Module (No Fitting of VICS)",
    },
    {
        id: "B2203",
        value: "CD-ROM Error",
    },
    {
        id: "B2204",
        value: "GPS Antenna Connection Open or Short",
    },
    {
        id: "B2205",
        value: "GPS Receiver Error",
    },
    {
        id: "B2206",
        value: "Gyroscope Error",
    },
    {
        id: "B2207",
        value: "ECU ROM Checksum Error",
    },
    {
        id: "B2208",
        value: "Communication Link to Display and Switch Module Error",
    },
    {
        id: "B2209",
        value: "Interior Lamp Override Switch Open Circuit",
    },
    {
        id: "B2210",
        value: "Interior Lamp Override Switch Short to Ground",
    },
    {
        id: "B2211",
        value: "Low Coolant Lamp Output Circuit Short to Battery",
    },
    {
        id: "B2214",
        value: "Window Passenger Front Up Switch Short to Battery",
    },
    {
        id: "B2215",
        value: "Window Passenger Front Down Switch Short to Battery",
    },
    {
        id: "B2219",
        value: "Window Driver Front Current Feedback Exceeded",
    },
    {
        id: "B2220",
        value: "Window Driver Rear Current Feedback Exceeded",
    },
    {
        id: "B2221",
        value: "Window Passenger Front Current Feedback Exceeded",
    },
    {
        id: "B2222",
        value: "Window Passenger Rear Current Feedback Exceeded",
    },
    {
        id: "B2223",
        value: "Mirror Driver Drive Circuit Failure",
    },
    {
        id: "B2224",
        value: "Mirror Passenger Drive Circuit Failure",
    },
    {
        id: "B2225",
        value: "Front Crash Sensor Mount Fault",
    },
    {
        id: "B2226",
        value: "Front Crash Sensor Internal Fault",
    },
    {
        id: "B2227",
        value: "Front Crash Sensor Driver Communications Fault",
    },
    {
        id: "B2228",
        value: "Air Bag Driver Circuit Short to Ground - Loop #2",
    },
    {
        id: "B2229",
        value: "Air Bag Passenger Circuit Short to Ground - Loop #2",
    },
    {
        id: "B2230",
        value: "Air Bag Driver Circuit Short to Battery - Loop #2",
    },
    {
        id: "B2231",
        value: "Air Bag Passenger Circuit Short to Battery - Loop #2",
    },
    {
        id: "B2232",
        value: "Air Bag Driver Circuit Open - Loop #2",
    },
    {
        id: "B2233",
        value: "Air Bag passenger Circuit Open - Loop #2",
    },
    {
        id: "B2234",
        value: "Air Bag Driver Inflator Circuit Resistance Low on Squib - Loop #2",
    },
    {
        id: "B2235",
        value: "Air Bag Passenger Inflator Circuit",
    },
    {
        id: "B2236",
        value: "Weak or Defected Electric Vehicle Battery Module Fault",
    },
    {
        id: "B2237",
        value: "Vehicle Signal indicating Park While VSS Present",
    },
    {
        id: "B2238",
        value: "Power Cable For Power Sliding Door Broken",
    },
    {
        id: "B2239",
        value: "Rear Cargo Door Set Switch Stuck (Short to Ground)",
    },
    {
        id: "B2240",
        value: "Rear Cargo Door Reset Switch Stuck (Short to Ground)",
    },
    {
        id: "B2241",
        value: "Rear Cargo Door Lock Circuit Short to Ground",
    },
    {
        id: "B2242",
        value: "Rear Cargo Door Unlock Circuit Open",
    },
    {
        id: "B2243",
        value: "Driver Rear Door Ajar Circuit Open",
    },
    {
        id: "B2244",
        value: "Driver Sliding Door Ajar Circuit Short to GND",
    },
    {
        id: "B2245",
        value: "Passenger Rear Door Ajar Circuit Open",
    },
    {
        id: "B2246",
        value: "Passenger Sliding Door Ajar Circuit Short to GND",
    },
    {
        id: "B2247",
        value: "EV Battery Pack Temperature Fault",
    },
    {
        id: "B2248",
        value: "Heated Windshield Relay Coil Circuit Failure",
    },
    {
        id: "B2249",
        value: "Head Lamp Relay Coil Short to Battery",
    },
    {
        id: "B2250",
        value: "All Doors Unlock Relay Circuit Failure",
    },
    {
        id: "B2251",
        value: "Parklamp Output Relay Driver Circuit Failure",
    },
    {
        id: "B2252",
        value: "Parklamp Output Relay Dirver Short to Battery",
    },
    {
        id: "B2300",
        value: "Seat Driver Memory Position Error",
    },
    {
        id: "B2301",
        value: "Seat Passenger Memory Position Error",
    },
    {
        id: "B2302",
        value: "Seat Headrest Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2303",
        value: "Seat Headrest Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2304",
        value: "Seat Headrest Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2305",
        value: "Seat Headrest Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2306",
        value: "Seat Headrest Motor Stalled",
    },
    {
        id: "B2310",
        value: "Mirror Driver Memory Position Error",
    },
    {
        id: "B2311",
        value: "Mirror Passenger Memory Position Error",
    },
    {
        id: "B2312",
        value: "Mirror Passenger Horizontal Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2313",
        value: "Mirror Passenger Horizontal Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2314",
        value: "Mirror Passenger Horizontal Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2315",
        value: "Mirror Passenger Horizontal Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2316",
        value: "Mirror Passenger Vertical Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2317",
        value: "Mirror Passenger Vertical Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2318",
        value: "Mirror Passenger Vertical Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2319",
        value: "Mirror Passenger Vertical Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2320",
        value: "Mirror Driver Horizontal Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2321",
        value: "Mirror Driver Horizontal Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2322",
        value: "Mirror Driver Horizontal Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2323",
        value: "Mirror Driver Horizontal Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2324",
        value: "Mirror Driver Vertical Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2325",
        value: "Mirror Driver Vertical Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2326",
        value: "Mirror Driver Vertical Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2327",
        value: "Mirror Driver Vertical Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2328",
        value: "Column Reach Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2329",
        value: "Column Reach Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2330",
        value: "Column Reach Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2331",
        value: "Column Reach Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2332",
        value: "Column Tilt Feedback Potentiometer Circuit Failure",
    },
    {
        id: "B2333",
        value: "Column Tilt Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2334",
        value: "Column Tilt Feedback Potentiometer Circuit Short to Battery",
    },
    {
        id: "B2335",
        value: "Column Tilt Feedback Potentiometer Circuit Short to Ground",
    },
    {
        id: "B2336",
        value: "Mirror Switch Assembly Circuit Failure",
    },
    {
        id: "B2337",
        value: "Mirror Switch Assembly Circuit Open",
    },
    {
        id: "B2338",
        value: "Mirror Switch Assembly Circuit Short to Battery",
    },
    {
        id: "B2339",
        value: "Mirror Switch Assembly Circuit Short to Ground",
    },
    {
        id: "B2340",
        value: "Column Reach Motor Stalled",
    },
    {
        id: "B2341",
        value: "Column Tilt Motor Stalled",
    },
    {
        id: "B2342",
        value: "Seat Switch Reference Voltage Positive Common Open Circuit",
    },
    {
        id: "B2343",
        value: "Seat Switch Reference Voltage Positive Common Supply Low Voltage",
    },
    {
        id: "B2344",
        value: "Seat Switch Reference Voltage Positive Common Supply Voltage Fault",
    },
    {
        id: "B2345",
        value: "Seat Switch Reference Voltage Negative Common Open Circuit",
    },
    {
        id: "B2346",
        value: "Mirror Switch Reference Voltage Positive Common Open Circuit",
    },
    {
        id: "B2347",
        value: "Mirror Switch Reference Voltage Positive Common Supply Low Voltage",
    },
    {
        id: "B2348",
        value: "Mirror Switch Reference Voltage Positive Common Supply Voltage Fault",
    },
    {
        id: "B2349",
        value: "Mirror Switch Reference Voltage Negative Common Open Circuit",
    },
    {
        id: "B2350",
        value: "Steering Column Switch Circuit Short to Battery",
    },
    {
        id: "B2351",
        value: "Steering Column Switch Circuit Failure",
    },
    {
        id: "B2352",
        value: "Driver Memory Power Switch Indicator Circuit Short to Battery",
    },
    {
        id: "B2353",
        value: "Driver Mirror Power Driver Circuit Short Ground",
    },
    {
        id: "B2354",
        value: "Driver Mirror Horizontal / Vertical Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2355",
        value: "Passenger Mirror Horizontal / Vertical Feedback Potentiometer Circuit Open",
    },
    {
        id: "B2357",
        value: "Driver Window Down Current Sense Low Circuit Failure",
    },
    {
        id: "B2362",
        value: "Remote Open/Close signal Circuit Short to Ground",
    },
    {
        id: "B2363",
        value: "Optical Sensor System Failure",
    },
    {
        id: "B2364",
        value: "Fuel Filler Door Circuit Open",
    },
    {
        id: "B2365",
        value: "B-pillar Power Sliding Door Open/Close Switch Input Ckt Short to Gnd",
    },
    {
        id: "B2366",
        value: "IP Power Sliding Door Open/Close switch Ckt Short to Gnd",
    },
    {
        id: "B2367",
        value: "Power Sliding Door Override Switch Input Ckt Short to Gnd",
    },
    {
        id: "B2368",
        value: "Steering Column Switch Circuit Out of Range",
    },
    {
        id: "B2369",
        value: "Chime OUTPUT Request Ckt Short to Ground",
    },
    {
        id: "B2373",
        value: "LED #1 Circuit Short to Battery",
    },
    {
        id: "B2374",
        value: "Power Sliding Detent (Latch) Circuit  Failure",
    },
    {
        id: "B2380",
        value: "Heater Coolant Temp sensor circuit Short to GND",
    },
    {
        id: "B2381",
        value: "Heater Coolant Temp sensor circuit Open",
    },
    {
        id: "B2384",
        value: "Audio Reverse Aid Mute Input Ckt Failure",
    },
    {
        id: "B2385",
        value: "Audio Navigation Mute Input Ckt  Failure",
    },
    {
        id: "B2401",
        value: "Audio Tape Deck Mechanism Fault",
    },
    {
        id: "B2402",
        value: "Audio CD/DJ Thermal Shutdown Fault",
    },
    {
        id: "B2403",
        value: "Audio CD/DJ Internal Fault",
    },
    {
        id: "B2404",
        value: "Audio Steering Wheel Switch Circuit Fault",
    },
    {
        id: "B2405",
        value: "Audio Single-Disc CD Player Thermal Shutdown Fault",
    },
    {
        id: "B2406",
        value: "Audio Single-Disc CD Player Internal Fault",
    },
    {
        id: "B2416",
        value: "Climate Control Recirculation Actuator Out of Limits",
    },
    {
        id: "B2425",
        value: "Remote Keyless Entry Out of Synchronization",
    },
    {
        id: "B2426",
        value: "Passenger Solar Radiation Sensor  Circuit Open",
    },
    {
        id: "B2427",
        value: "Passenger Solar Radiation Sensor  Circuit Short to Ground",
    },
    {
        id: "B2428",
        value: "A/C Post Heater Sensor #2 Circuit Failure",
    },
    {
        id: "B2429",
        value: "A/C Post Heater Sensor #2 Circuit Short to Ground",
    },
    {
        id: "B2431",
        value: "Transponder Programming Failed",
    },
    {
        id: "B2432",
        value: "Drivers Seat Belt Buckle Switch Circuit Open",
    },
    {
        id: "B2433",
        value: "Drivers Seat Belt Buckle Switch Circuit Short to Battery",
    },
    {
        id: "B2434",
        value: "Drivers Seat Belt Buckle Switch Circuit Short to Ground",
    },
    {
        id: "B2435",
        value: "Drivers Seat Belt Buckle Switch Resistance out of Range",
    },
    {
        id: "B2436",
        value: "Passengers Seat Belt Buckle Switch Circuit Open",
    },
    {
        id: "B2437",
        value: "Passengers Seat Belt Buckle Switch Circuit Short to Battery",
    },
    {
        id: "B2438",
        value: "Passengers Seat Belt Buckle Switch Circuit Short to Ground",
    },
    {
        id: "B2439",
        value: "Passengers Seat Belt Buckle Switch Resistance out of Range",
    },
    {
        id: "B2440",
        value: "Passenger Side",
    },
    {
        id: "B2441",
        value: "Driver Side",
    },
    {
        id: "B2442",
        value: "Intrusion Sensor Fault",
    },
    {
        id: "B2443",
        value: "Powertrain Performance Mode Switch Circuit failure",
    },
    {
        id: "B2444",
        value: "Driver Side Crash Sensor Internal Fault",
    },
    {
        id: "B2445",
        value: "Passenger Side Crash Sensor Internal Fault",
    },
    {
        id: "B2446",
        value: "RESCU/VEMS Input Circuit Open",
    },
    {
        id: "B2447",
        value: "RESCU/VEMS Input Circuit Short to Battery",
    },
    {
        id: "B2448",
        value: "RESCU/VEMS Input Circuit Short to Ground",
    },
    {
        id: "B2449",
        value: "Aux Heater Glow Plug Circuit Short to Ground",
    },
    {
        id: "B2450",
        value: "Aux Heater Glow Plug Circuit Open",
    },
    {
        id: "B2451",
        value: "Aux Heater Fuel Pump Circuit Short to Ground",
    },
    {
        id: "B2452",
        value: "Aux Heater Fuel Pump Circuit Open",
    },
    {
        id: "B2453",
        value: "Aux Heater Blower Fan Circuit Short to Ground",
    },
    {
        id: "B2454",
        value: "Aux Heater Blower Fan Circuit Open",
    },
    {
        id: "B2455",
        value: "Aux Heater Blower Faulted",
    },
    {
        id: "B2456",
        value: "Aux Heater Coolant Sensor Circuit Short to Ground",
    },
    {
        id: "B2457",
        value: "Aux Heater Coolant Sensor Circuit Open",
    },
    {
        id: "B2458",
        value: "Aux Heater Overheat Sensor Circuit Short to Ground",
    },
    {
        id: "B2459",
        value: "Aux Heater Overheat Sensor Circuit Open",
    },
    {
        id: "B2460",
        value: "Aux Heater Flame Sensor Circuit Short to Ground",
    },
    {
        id: "B2461",
        value: "Aux Heater Flame Sensor Circuit Open",
    },
    {
        id: "B2462",
        value: "Aux Heater Flame Out Fault",
    },
    {
        id: "B2463",
        value: "Aux Heater Overheat Fault",
    },
    {
        id: "B2464",
        value: "Aux Heater Start Time Exceeded",
    },
    {
        id: "B2465",
        value: "Aux Heater Start Counter Overrun/System Locked (same as below ?)",
    },
    {
        id: "B2466",
        value: "Aux Heater Overheat Counter Overrun/System Locked",
    },
    {
        id: "B2467",
        value: "Aux Heater Cool Down Time Exceeded (may be con to a453-5 )",
    },
    {
        id: "B2468",
        value: "Aux Heater Coolant Pump Circuit Short to Ground",
    },
    {
        id: "B2469",
        value: "Aux Heater Coolant Pump Circuit Open",
    },
    {
        id: "B2470",
        value: "Interior Fan Control Circuit Short to Ground",
    },
    {
        id: "B2471",
        value: "Interior Fan Control Circuit Open",
    },
    {
        id: "B2472",
        value: "Fog Lamp Switch  Failure",
    },
    {
        id: "B2473",
        value: "Passenger Door Disarm Switch ckt Short to Ground",
    },
    {
        id: "B2474",
        value: "Passenger Door Lock Switch Circuit Shorted to Ground",
    },
    {
        id: "B2475",
        value: "Passenger Door Unlock Switch Circuit Shorted to Ground",
    },
    {
        id: "B2476",
        value: "RADIO PRESENT SWITCH Ckt Failure",
    },
    {
        id: "B2477",
        value: "Module Configuration Failure",
    },
    {
        id: "B2478",
        value: "ANTI THEFT INPUT SIGNAL SHORT TO GROUND",
    },
    {
        id: "B2479",
        value: "BRAKE PARK SWITCH CIRCUIT SHORT TO GROUND",
    },
    {
        id: "B2480",
        value: "LF CORNER LAMP OUTPUT Ckt Short to Battery",
    },
    {
        id: "B2481",
        value: "Convertible Top Up/Down switch Fault",
    },
    {
        id: "B2482",
        value: "RF CORNER LAMP OUTPUT Ckt Short to Battery",
    },
    {
        id: "B2483",
        value: "Enable Signal Open Circuit",
    },
    {
        id: "B2484",
        value: "Disable Signal Short to Ground",
    },
    {
        id: "B2485",
        value: "LF SIDE REPEATER LAMP OUTPUT Ckt Short to Battery",
    },
    {
        id: "B2487",
        value: "RF SIDE REPEATER LAMP OUTPUT Ckt Short to Battery",
    },
    {
        id: "B2489",
        value: "UNDERHOOD LAMP OUTPUT CIRCUIT Failure",
    },
    {
        id: "B2490",
        value: "UNDERHOOD LAMP OUTPUT CIRCUIT Short to Battery",
    },
    {
        id: "B2491",
        value: "RF PARK LAMP OUTPUT CIRCUIT Short to Battery",
    },
    {
        id: "B2492",
        value: "Already Programmed (Test Mode DTC Only !!!)",
    },
    {
        id: "B2493",
        value: "LF PARK LAMP OUTPUT CIRCUIT Short to Battery",
    },
    {
        id: "B2494",
        value: "ANTI THEFT HORN OUTPUT CIRCUIT Short to Batt",
    },
    {
        id: "B2495",
        value: "ANTI THEFT HORN OUTPUT CIRCUIT Failure",
    },
    {
        id: "B2496",
        value: "ANTI THEFT HORN OUTPUT CIRCUIT Short to Gnd",
    },
    {
        id: "B2499",
        value: "COURTESY LAMP OUTPUT Failure",
    },
    {
        id: "B2500",
        value: "COURTESY LAMP OUTPUT Ckt Short to Battery",
    },
    {
        id: "B2501",
        value: "LF LAMP LOW BEAM CIRCUIT Failure",
    },
    {
        id: "B2502",
        value: "LF LAMP LOW BEAM CIRCUIT Short to Battery",
    },
    {
        id: "B2503",
        value: "RF LAMP LOW BEAM CIRCUIT Failure",
    },
    {
        id: "B2504",
        value: "RF LAMP LOW BEAM CIRCUIT Short to Battery",
    },
    {
        id: "B2505",
        value: "LF LAMP HIGH BEAM CIRCUIT Failure",
    },
    {
        id: "B2506",
        value: "LF LAMP HIGH BEAM CIRCUIT Short to Battery",
    },
    {
        id: "B2507",
        value: "RF LAMP HIGH BEAM CIRCUIT Failure",
    },
    {
        id: "B2508",
        value: "RF LAMP HIGH BEAM CIRCUIT Short to Battery",
    },
    {
        id: "B2509",
        value: "Rear Fog Lamp Switch Circuit Failure",
    },
    {
        id: "B2510",
        value: "Main Blower Motor Relay Circuit Short to Battery",
    },
    {
        id: "B2511",
        value: "Horn Output Relay Circuit Short to Battery",
    },
    {
        id: "B2512",
        value: "Front Fog Lamp Relay Ckt Short to Battery",
    },
    {
        id: "B2513",
        value: "Blower (Fan) Circuit Failure",
    },
    {
        id: "B2514",
        value: "Blower (Fan) Circuit Short to Vbatt",
    },
    {
        id: "B2515",
        value: "Heater Blower Relay Circuit Failure",
    },
    {
        id: "B2516",
        value: "Blower Control Circuit Failure",
    },
    {
        id: "B2517",
        value: "Emergency Power Off System Faulted",
    },
    {
        id: "B2518",
        value: "Compressor Overtemp Fault",
    },
    {
        id: "B2519",
        value: "High Mount Stop Lamp Circuit Failure",
    },
    {
        id: "B2520",
        value: "High Mount Stop Lamp Circuit Short to Battery",
    },
    {
        id: "B2523",
        value: "License Lamp Circuit Failure",
    },
    {
        id: "B2524",
        value: "License Lamp Circuit Short to Battery",
    },
    {
        id: "B2525",
        value: "Left Rear Backup Lamp Circuit Failure",
    },
    {
        id: "B2526",
        value: "Left Rear Backup Lamp Circuit Short to Battery",
    },
    {
        id: "B2527",
        value: "Left Rear Stop lamp Circuit Failure",
    },
    {
        id: "B2528",
        value: "Left Rear Stop lamp Circuit Short to Battery",
    },
    {
        id: "B2529",
        value: "Left Rear  Turn Lamp Circuit Failure",
    },
    {
        id: "B2530",
        value: "Left Rear  Turn Lamp Circuit Short to Battery",
    },
    {
        id: "B2531",
        value: "Right Rear Backup Lamp Circuit Failure",
    },
    {
        id: "B2532",
        value: "Right Rear Backup Lamp Circuit Short to Battery",
    },
    {
        id: "B2533",
        value: "Right Rear Stop lamp Circuit Failure",
    },
    {
        id: "B2534",
        value: "Right Rear Stop lamp Circuit Short to Battery",
    },
    {
        id: "B2535",
        value: "Right Rear  Turn Lamp Circuit Failure",
    },
    {
        id: "B2536",
        value: "Right Rear  Turn Lamp Circuit Short to Battery",
    },
    {
        id: "B2539",
        value: "Aux A/C Mode Position Reference Circuit Short to Ground",
    },
    {
        id: "B2540",
        value: "Aux A/C Mode Position Reference Circuit Short to Battery",
    },
    {
        id: "B2543",
        value: "Aux A/C Control Switch Reference Circuit Short to Ground",
    },
    {
        id: "B2544",
        value: "Aux A/C Control Switch Reference Circuit Short to Battery",
    },
    {
        id: "B2545",
        value: "System Power Relay Circuit Short to Battery",
    },
    {
        id: "B2546",
        value: "System Power Relay Circuit Failure",
    },
    {
        id: "B2550",
        value: "LAMP DOME OUTPUT Circuit Short to Ground",
    },
    {
        id: "B2553",
        value: "Disable Signal Output Circuit Short to Battery",
    },
    {
        id: "B2554",
        value: "LAMP DOME OUTPUT Circuit Failure",
    },
    {
        id: "B2555",
        value: "LAMP DOME OUTPUT Circuit Short to Battery",
    },
    {
        id: "B2556",
        value: "Enable Signal  Circuit Short to Battery",
    },
    {
        id: "B2557",
        value: "Left Power Sliding Door Open/Close Output Circuit Short to Battery",
    },
    {
        id: "B2558",
        value: "Right Power Sliding Door Open/Close Output Circuit Short to Battery",
    },
    {
        id: "B2559",
        value: "Aux A/C Blower Motor Relay Circuit Short to Battery",
    },
    {
        id: "B2560",
        value: "Aux A/C Blower Motor Relay Circuit Short to Ground",
    },
    {
        id: "B2561",
        value: "Aux A/C Blower Speed 1 Circuit Failure",
    },
    {
        id: "B2562",
        value: "Aux A/C Blower Speed 1 Circuit Short to Ground",
    },
    {
        id: "B2563",
        value: "Aux A/C Blower Speed 2 Circuit Failure",
    },
    {
        id: "B2564",
        value: "Aux A/C Blower Speed 2 Circuit Short to Ground",
    },
    {
        id: "B2565",
        value: "Right Tail Lamp Circuit Failure",
    },
    {
        id: "B2566",
        value: "Right Tail Lamp Circuit Short to Ground",
    },
    {
        id: "B2567",
        value: "Reverse Mirror Output Circuit Failure",
    },
    {
        id: "B2568",
        value: "Reverse Mirror Output Circuit Short to Ground",
    },
    {
        id: "B2569",
        value: "Liftgate Disarm Switch Circuit Short to Ground",
    },
    {
        id: "B2570",
        value: "Right Lamp Outage Signal Circuit Short to Ground",
    },
    {
        id: "B2571",
        value: "Left Lamp Outage Signal Circuit Short to Ground",
    },
    {
        id: "B2580",
        value: "Aux Blower Sense Switch Circuit Failure",
    },
    {
        id: "B2581",
        value: "Passenger Seat Occupant Detection Circuit Short To Ground",
    },
    {
        id: "B2582",
        value: "Passenger Seat Occupant Detection Circuit Open",
    },
    {
        id: "B2583",
        value: "Child Seat Detection Circuit Short to Ground",
    },
    {
        id: "B2584",
        value: "Child Seat Detection Circuit Open",
    },
    {
        id: "B2585",
        value: "Anti Theft Input Signal Circuit Short To Battery",
    },
    {
        id: "B2586",
        value: "Headlamp Mode Select Circuit Failure",
    },
    {
        id: "B2587",
        value: "Passenger Seat Occupant Detection Circuit Short To Battery",
    },
    {
        id: "B2588",
        value: "Child Seat Detection Circuit Short To Battery",
    },
    {
        id: "B2589",
        value: "Unexpected Door Reversal During Close",
    },
    {
        id: "B2590",
        value: "Vehicle Park/Speed Signal Circuit Failure",
    },
    {
        id: "B2591",
        value: "Detent Signal Missing During Unlatch",
    },
    {
        id: "B2592",
        value: "PSD Not Fully Closed (Module Commanded Successfully)",
    },
    {
        id: "B2593",
        value: "Power Sliding Door Opened During Module Close Command",
    },
    {
        id: "B2594",
        value: "No Movement Detected After an Unlatch During Power Open",
    },
    {
        id: "B2595",
        value: "Anti Theft Input Signal Circuit Failure",
    },
    {
        id: "B2596",
        value: "Headlamp Aim Output Relay Circuit Short To Battery",
    },
    {
        id: "B2597",
        value: "Headlamp Aim Output Relay Circuit Failure",
    },
    {
        id: "B2598",
        value: "Headlamp Relay Circuit Failure",
    },
    {
        id: "B2599",
        value: "Tailgate Release Open Circuit",
    },
    {
        id: "B2600",
        value: "Double Locking Door Motor Frozen",
    },
    {
        id: "B2601",
        value: "No Latch Signal Sensed on Closing and Door Reversed",
    },
    {
        id: "B2602",
        value: "Missing Latch Signal During Power Sliding Door Unlatch",
    },
    {
        id: "B2603",
        value: "PSD Not Fully Closed During Self-Test",
    },
    {
        id: "B2604",
        value: "Power Sliding Door On/Off Switch Open Circuit",
    },
    {
        id: "B2605",
        value: "Disable Signal Open Circuit",
    },
    {
        id: "B2606",
        value: "A/C Temperature Sensor Out of Range",
    },
    {
        id: "C1091",
        value: "Speed Wheel Sensor All Coherency Failure",
    },
    {
        id: "C1095",
        value: "ABS Hydraulic Pump Motor Circuit Failure",
    },
    {
        id: "C1096",
        value: "ABS Hydraulic Pump Motor Circuit Open",
    },
    {
        id: "C1097",
        value: "ABS Hydraulic Pump Motor Circuit Short To Ground",
    },
    {
        id: "C1098",
        value: "ABS Hydraulic Pump Motor Circuit Short To Battery",
    },
    {
        id: "C1100",
        value: "ABS Pump Switch Circuit Failure",
    },
    {
        id: "C1101",
        value: "ABS Hydraulic Valve Circuit Failure",
    },
    {
        id: "C1102",
        value: "ABS Acceleration Switch Circuit Failure",
    },
    {
        id: "C1103",
        value: "ABS Hydraulic Brake Switch Circuit Failure",
    },
    {
        id: "C1104",
        value: "Traction Control Active Lamp - Circuit Short to Battery",
    },
    {
        id: "C1105",
        value: "Traction Control Disable Lamp - Circuit Short to Battery",
    },
    {
        id: "C1106",
        value: "Traction Control Disable Switch Circuit Short to Battery",
    },
    {
        id: "C1107",
        value: "ABS Function Enabled Input Circuit Failure",
    },
    {
        id: "C1109",
        value: "Speed Control Actuator Assembly Cable Release  Failure",
    },
    {
        id: "C1110",
        value: "ABS Power Relay Coil Circuit Failure",
    },
    {
        id: "C1111",
        value: "ABS Power Relay Coil Open Circuit",
    },
    {
        id: "C1112",
        value: "ABS Power Relay Coil Short Circuit To Ground",
    },
    {
        id: "C1113",
        value: "ABS Power Relay Coil Short Circuit To Battery",
    },
    {
        id: "C1114",
        value: "ABS Power Relay Output Short Circuit To Ground",
    },
    {
        id: "C1115",
        value: "ABS Power Relay Output Short Circuit To Battery",
    },
    {
        id: "C1116",
        value: "Starter Motor Circuit Failure",
    },
    {
        id: "C1117",
        value: "RPM Input Circuit Failure",
    },
    {
        id: "C1123",
        value: "Vehicle Speed Sensor Input Short to Battery",
    },
    {
        id: "C1124",
        value: "Input shaft speed signal missing/faulted",
    },
    {
        id: "C1125",
        value: "Brake Fluid Level Sensor Input Circuit Failure",
    },
    {
        id: "C1126",
        value: "Cruise Control Command Switch Assembly Circuit Failure",
    },
    {
        id: "C1127",
        value: "Cruise Control Deactivator Brake Switch Circuit Failure",
    },
    {
        id: "C1132",
        value: "Clutch position ckt short to ground",
    },
    {
        id: "C1133",
        value: "Clutch position ckt short to battery",
    },
    {
        id: "C1134",
        value: "Gear Shift position short to ground",
    },
    {
        id: "C1135",
        value: "Gear Shift position short to battery",
    },
    {
        id: "C1136",
        value: "Gear Select position short to ground",
    },
    {
        id: "C1137",
        value: "ECU is Defective",
    },
    {
        id: "C1138",
        value: "Gear Select position short to Battery",
    },
    {
        id: "C1139",
        value: "Wheel Speed Sensor Center Tone Ring Missing Tooth Fault",
    },
    {
        id: "C1140",
        value: "Hydraulic Base Brake Failure",
    },
    {
        id: "C1141",
        value: "Wheel Speed Sensor LF Tone Ring Tooth Missing Fault",
    },
    {
        id: "C1142",
        value: "Wheel Speed Sensor RF Tone Ring Tooth Missing Fault",
    },
    {
        id: "C1143",
        value: "Wheel Speed Sensor LR Tone Ring Tooth Missing Fault",
    },
    {
        id: "C1144",
        value: "Wheel Speed Sensor RR Tone Ring Tooth Missing Fault",
    },
    {
        id: "C1145",
        value: "Speed Wheel Sensor RF Input Circuit Failure",
    },
    {
        id: "C1146",
        value: "Speed Wheel Sensor RF Circuit Open",
    },
    {
        id: "C1148",
        value: "Speed Wheel Sensor RF Coherency Fault",
    },
    {
        id: "C1149",
        value: "Hydraulic Fluid Pressure/ Flow Circuit Failure",
    },
    {
        id: "C1150",
        value: "Two Speed Rear Axle Input Switch Circuit Short to Vbatt",
    },
    {
        id: "C1155",
        value: "Speed Wheel Sensor LF Input Circuit Failure",
    },
    {
        id: "C1156",
        value: "Speed Wheel Sensor LF Circuit Open",
    },
    {
        id: "C1157",
        value: "Park Brake Actuator Assembly Switch Applied Circuit Failure",
    },
    {
        id: "C1158",
        value: "Speed Wheel Sensor LF Coherency Fault",
    },
    {
        id: "C1159",
        value: "Hydraulic Fluid Pressure/ Flow Circuit Short to Gnd",
    },
    {
        id: "C1161",
        value: "Air Pressure Low Circuit Short to Gnd",
    },
    {
        id: "C1162",
        value: "Park Brake Switch # 2 Released Circuit Failure",
    },
    {
        id: "C1163",
        value: "Park Brake Switch # 2 Applied Circuit Short to Gnd",
    },
    {
        id: "C1164",
        value: "Park Brake Actuator Assembly Switch Circuit Failure",
    },
    {
        id: "C1165",
        value: "Speed Wheel Sensor RR Input Circuit Failure",
    },
    {
        id: "C1166",
        value: "Speed Wheel Sensor RR Input Open Circuit",
    },
    {
        id: "C1167",
        value: "Park Brake Actuator Assembly Switch Released Circuit Short to Gnd",
    },
    {
        id: "C1168",
        value: "Speed Wheel Sensor RR Coherency Fault",
    },
    {
        id: "C1169",
        value: "ABS Fluid Dumping Exceeds Maximum Timing",
    },
    {
        id: "C1170",
        value: "PRNDL  Switch Circuit Failure",
    },
    {
        id: "C1172",
        value: "Park Brake Switch # 1 Applied Circuit Failure",
    },
    {
        id: "C1173",
        value: "Park Brake Switch # 1 Released Circuit Short to Gnd",
    },
    {
        id: "C1174",
        value: "Park Brake Switch # 2 Applied Circuit Failure",
    },
    {
        id: "C1175",
        value: "Speed Wheel Sensor LR Input Circuit Failure",
    },
    {
        id: "C1176",
        value: "Speed Wheel Sensor LR Circuit Open",
    },
    {
        id: "C1177",
        value: "Park Brake Actuator Assembly Switch Released Circuit Failure",
    },
    {
        id: "C1178",
        value: "Speed Wheel Sensor LR Coherency Fault",
    },
    {
        id: "C1179",
        value: "Speed Control Actuator Assembly Cable Slack Failure",
    },
    {
        id: "C1180",
        value: "Park Brake Valve Solenoid #1 Sense Input Circuit Failure",
    },
    {
        id: "C1181",
        value: "Park Brake Valve Solenoid #1 Sense Input Circuit Short to Gound",
    },
    {
        id: "C1182",
        value: "Park Lamp Flash Relay Circuit Failure",
    },
    {
        id: "C1183",
        value: "Park Lamp Flash Relay Circuit Short to Battery",
    },
    {
        id: "C1184",
        value: "ABS System Is Not Operational",
    },
    {
        id: "C1185",
        value: "ABS Power Relay Output Circuit Failure",
    },
    {
        id: "C1186",
        value: "ABS Power Relay Output Open Circuit",
    },
    {
        id: "C1187",
        value: "Brake Fluid Level Sensor Input Open Circuit",
    },
    {
        id: "C1188",
        value: "Brake Fluid Level Sensor Input Short Circuit To Battery",
    },
    {
        id: "C1189",
        value: "Brake Fluid Level Sensor Input Short Circuit To Ground",
    },
    {
        id: "C1190",
        value: "Speed Wheel Sensor LF Input Short Circuit To Battery",
    },
    {
        id: "C1191",
        value: "Speed Wheel Sensor LF Input Short Circuit To Ground",
    },
    {
        id: "C1192",
        value: "Speed Wheel Sensor RF Input Short Circuit To Battery",
    },
    {
        id: "C1193",
        value: "Speed Wheel Sensor RF Input Short Circuit To Ground",
    },
    {
        id: "C1194",
        value: "ABS Outlet Valve Coil LF Circuit Failure",
    },
    {
        id: "C1195",
        value: "ABS Outlet Valve Coil LF Circuit Open",
    },
    {
        id: "C1196",
        value: "ABS Outlet Valve Coil LF Circuit Short To Battery",
    },
    {
        id: "C1197",
        value: "ABS Outlet Valve Coil LF Circuit Short To Ground",
    },
    {
        id: "C1198",
        value: "ABS Inlet Valve Coil LF Circuit Failure",
    },
    {
        id: "C1199",
        value: "ABS Inlet Valve Coil LF Circuit Open",
    },
    {
        id: "C1200",
        value: "ABS Inlet Valve Coil LF Circuit Short To Battery",
    },
    {
        id: "C1201",
        value: "ABS Inlet Valve Coil LF Circuit Short To Ground",
    },
    {
        id: "C1202",
        value: "ABS Outlet Valve Coil Rear Circuit Failure",
    },
    {
        id: "C1203",
        value: "ABS Outlet Valve Coil Rear Circuit Open",
    },
    {
        id: "C1204",
        value: "ABS Outlet Valve Coil Rear Circuit Short To Battery",
    },
    {
        id: "C1205",
        value: "ABS Outlet Valve Coil Rear Circuit Short To Ground",
    },
    {
        id: "C1206",
        value: "ABS Inlet Valve Coil Rear Circuit Failure",
    },
    {
        id: "C1207",
        value: "ABS Inlet Valve Coil Rear Circuit Open",
    },
    {
        id: "C1208",
        value: "ABS Inlet Valve Coil Rear Circuit Short To Battery",
    },
    {
        id: "C1209",
        value: "ABS Inlet Valve Coil Rear Circuit Short To Ground",
    },
    {
        id: "C1210",
        value: "ABS Outlet Valve Coil RF Circuit Failure",
    },
    {
        id: "C1211",
        value: "ABS Outlet Valve Coil RF Circuit Open",
    },
    {
        id: "C1212",
        value: "ABS Outlet Valve Coil RF Circuit Short To Battery",
    },
    {
        id: "C1213",
        value: "ABS Outlet Valve Coil RF Circuit Short To Ground",
    },
    {
        id: "C1214",
        value: "ABS Inlet Valve Coil RF Circuit Failure",
    },
    {
        id: "C1215",
        value: "ABS Inlet Valve Coil RF Circuit Open",
    },
    {
        id: "C1216",
        value: "ABS Inlet Valve Coil RF Circuit Short To Battery",
    },
    {
        id: "C1217",
        value: "ABS Inlet Valve Coil RF Circuit Short To Ground",
    },
    {
        id: "C1218",
        value: "Lamp ABS Warning Output Circuit Failure",
    },
    {
        id: "C1219",
        value: "Lamp ABS Warning Output Circuit Open",
    },
    {
        id: "C1220",
        value: "Lamp ABS Warning Output Circuit Short To Battery",
    },
    {
        id: "C1221",
        value: "Lamp ABS Warning Output Circuit Short To Ground",
    },
    {
        id: "C1222",
        value: "Speed Wheel Mismatch",
    },
    {
        id: "C1223",
        value: "Lamp Brake Warning Output Circuit Failure",
    },
    {
        id: "C1224",
        value: "Lamp Brake Warning Output Circuit Open",
    },
    {
        id: "C1225",
        value: "Lamp Brake Warning Output Circuit Short To Battery",
    },
    {
        id: "C1226",
        value: "Lamp Brake Warning Output Circuit Short To Ground",
    },
    {
        id: "C1227",
        value: "Speed Wheel Sensor LR Input Short Circuit To Battery",
    },
    {
        id: "C1228",
        value: "Speed Wheel Sensor LR Input Short Circuit To Ground",
    },
    {
        id: "C1229",
        value: "Speed Wheel Sensor Rear Center Coherency Fault",
    },
    {
        id: "C1230",
        value: "Speed Wheel Sensor Rear Center Input Circuit Failure",
    },
    {
        id: "C1231",
        value: "Speed Wheel Sensor Rear Center Circuit Open",
    },
    {
        id: "C1232",
        value: "Speed Wheel Sensor Rear Center Input Short Circuit To Battery",
    },
    {
        id: "C1233",
        value: "Speed Wheel LF Input Signal Missing",
    },
    {
        id: "C1234",
        value: "Speed Wheel RF Input Signal Missing",
    },
    {
        id: "C1235",
        value: "Speed Wheel RR Input Signal Missing",
    },
    {
        id: "C1236",
        value: "Speed Wheel LR Input Signal Missing",
    },
    {
        id: "C1237",
        value: "Speed Wheel Rear Input Signal Missing",
    },
    {
        id: "C1238",
        value: "ABS Hydraulic Pressure Differential Switch Input Circuit Failure",
    },
    {
        id: "C1239",
        value: "ABS Hydraulic Pressure Differential Switch Input  Open Circuit",
    },
    {
        id: "C1240",
        value: "ABS Hydraulic Pressure Differential Switch Input Short Circuit To Battery",
    },
    {
        id: "C1241",
        value: "ABS Hydraulic Pressure Differential Switch Input Short Circuit To Ground",
    },
    {
        id: "C1242",
        value: "ABS Outlet Valve Coil LR Circuit Failure",
    },
    {
        id: "C1243",
        value: "ABS Outlet Valve Coil LR Circuit Open",
    },
    {
        id: "C1244",
        value: "ABS Outlet Valve Coil LR Circuit Short To Battery",
    },
    {
        id: "C1245",
        value: "ABS Outlet Valve Coil LR Circuit Short To Ground",
    },
    {
        id: "C1246",
        value: "ABS Outlet Valve Coil RR Circuit Failure",
    },
    {
        id: "C1247",
        value: "ABS Outlet Valve Coil RR Circuit Open",
    },
    {
        id: "C1248",
        value: "ABS Outlet Valve Coil RR Circuit Short To Battery",
    },
    {
        id: "C1249",
        value: "ABS Outlet Valve Coil RR Circuit Short To Ground",
    },
    {
        id: "C1250",
        value: "ABS Inlet Valve Coil LR Circuit Failure",
    },
    {
        id: "C1251",
        value: "ABS Inlet Valve Coil LR Circuit Open",
    },
    {
        id: "C1252",
        value: "ABS Inlet Valve Coil LR Circuit Short To Battery",
    },
    {
        id: "C1253",
        value: "ABS Inlet Valve Coil LR Circuit Short To Ground",
    },
    {
        id: "C1254",
        value: "ABS Inlet Valve Coil RR Circuit Failure",
    },
    {
        id: "C1255",
        value: "ABS Inlet Valve Coil RR Circuit Open",
    },
    {
        id: "C1256",
        value: "ABS Inlet Valve Coil RR Circuit Short To Battery",
    },
    {
        id: "C1257",
        value: "ABS Inlet Valve Coil RR Circuit Short To Ground",
    },
    {
        id: "C1258",
        value: "Speed Wheel LF Comparison Failure",
    },
    {
        id: "C1259",
        value: "Speed Wheel RF Comparison Failure",
    },
    {
        id: "C1260",
        value: "Speed Wheel RR Comparison Failure",
    },
    {
        id: "C1261",
        value: "Speed Wheel LR Comparison Failure",
    },
    {
        id: "C1262",
        value: "Lamp Warning Relay Circuit Failure",
    },
    {
        id: "C1263",
        value: "Lamp Warning Relay Circuit Open",
    },
    {
        id: "C1264",
        value: "Lamp Warning Relay Circuit Short To Battery",
    },
    {
        id: "C1265",
        value: "Lamp Warning Relay Circuit Short To Ground",
    },
    {
        id: "C1266",
        value: "ABS Valve Power Relay Circuit Failure",
    },
    {
        id: "C1267",
        value: "ABS Functions Temporarily Disabled",
    },
    {
        id: "C1268",
        value: "Motor Relay # 1 Circuit Failure",
    },
    {
        id: "C1269",
        value: "Motor Relay # 1 Circuit Short to Battery",
    },
    {
        id: "C1270",
        value: "Motor # 1 Input Circuit Failure",
    },
    {
        id: "C1271",
        value: "Motor # 1 Input Circuit Short to Gnd",
    },
    {
        id: "C1272",
        value: "Motor # 2 Input Circuit Failure",
    },
    {
        id: "C1273",
        value: "Motor # 2 Input Circuit Short to Vbat",
    },
    {
        id: "C1274",
        value: "Solenoid Relay # 1 Circuit Failure",
    },
    {
        id: "C1275",
        value: "Solenoid Relay # 1 Circuit Short to Vbatt",
    },
    {
        id: "C1276",
        value: "Park Brake Actuator Assembly Switch Applied Circuit Short to Gnd",
    },
    {
        id: "C1277",
        value: "STEERING Wheel Angle 1and 2 Circuit Failure",
    },
    {
        id: "C1278",
        value: "STEERING Wheel Angle 1and 2 Signal Faulted",
    },
    {
        id: "C1279",
        value: "Yaw Rate Sensor circuit Failure",
    },
    {
        id: "C1280",
        value: "Yaw Rate Sensor Signal Fault",
    },
    {
        id: "C1281",
        value: "Lateral Accelerometer circuit Failure",
    },
    {
        id: "C1282",
        value: "Lateral Accelerometer Signal Fault",
    },
    {
        id: "C1283",
        value: "Switch Test Signal Failure",
    },
    {
        id: "C1284",
        value: "Oil Pressure Switch Failure",
    },
    {
        id: "C1285",
        value: "Booster Solenoid circuit Failure",
    },
    {
        id: "C1286",
        value: "Booster Mechanical Failure",
    },
    {
        id: "C1287",
        value: "Booster Pedal Force switch circuit Failure",
    },
    {
        id: "C1288",
        value: "Pressure Transducer Main / Primary Input Circuit Failure",
    },
    {
        id: "C1289",
        value: "Pressure Transducer Redundant / Secondary Input Circuit Failure",
    },
    {
        id: "C1400",
        value: "Traction Control Valve RF Circuit Failure",
    },
    {
        id: "C1401",
        value: "Traction Control Valve RF Circuit Open",
    },
    {
        id: "C1402",
        value: "Traction Control Valve RF Circuit Short To Ground",
    },
    {
        id: "C1403",
        value: "Traction Control Valve RF Circuit Short To Battery",
    },
    {
        id: "C1404",
        value: "Traction Control Valve Rear Circuit Failure",
    },
    {
        id: "C1405",
        value: "Traction Control Valve Rear Circuit Open",
    },
    {
        id: "C1406",
        value: "Traction Control Valve Rear Circuit Short To Ground",
    },
    {
        id: "C1407",
        value: "Traction Control Valve Rear Circuit Short To Battery",
    },
    {
        id: "C1410",
        value: "Traction Control Valve LF Circuit Failure",
    },
    {
        id: "C1411",
        value: "Traction Control Valve LF Circuit Open",
    },
    {
        id: "C1412",
        value: "Traction Control Valve LF Circuit Short To Ground",
    },
    {
        id: "C1413",
        value: "Traction Control Valve LF Circuit Short To Battery",
    },
    {
        id: "C1414",
        value: "Incorrect Module Design Level",
    },
    {
        id: "C1415",
        value: "Incorrect Module Configuration",
    },
    {
        id: "C1416",
        value: "Damper RF Circuit Short To Battery",
    },
    {
        id: "C1417",
        value: "Damper RF Circuit Short to Ground",
    },
    {
        id: "C1418",
        value: "Damper RF Circuit Failure",
    },
    {
        id: "C1419",
        value: "Damper RF Circuit Open",
    },
    {
        id: "C1420",
        value: "Hydraulic Fluid Pressure/ Flow Circuit Short to Vbatt",
    },
    {
        id: "C1421",
        value: "Damper LF Circuit Short To Battery",
    },
    {
        id: "C1422",
        value: "Damper LF Circuit Short to Ground",
    },
    {
        id: "C1423",
        value: "Damper LF Circuit Failure",
    },
    {
        id: "C1424",
        value: "Damper LF Circuit Open",
    },
    {
        id: "C1425",
        value: "Damper RR Circuit Short to Ground",
    },
    {
        id: "C1426",
        value: "Damper RR Circuit Short To Battery",
    },
    {
        id: "C1427",
        value: "Damper RR Circuit Open",
    },
    {
        id: "C1428",
        value: "Damper RR Circuit Failure",
    },
    {
        id: "C1429",
        value: "Input-shaft-speed input circuit failure",
    },
    {
        id: "C1430",
        value: "Damper LR Circuit Open",
    },
    {
        id: "C1431",
        value: "Damper LR Circuit Short To Battery",
    },
    {
        id: "C1432",
        value: "Damper LR Circuit Short to Ground",
    },
    {
        id: "C1433",
        value: "Damper LR Circuit Failure",
    },
    {
        id: "C1435",
        value: "Accelerometer Rear Circuit Failure",
    },
    {
        id: "C1436",
        value: "Accelerometer Rear Circuit Signal Is Not Sensed",
    },
    {
        id: "C1437",
        value: "Accelerometer Rear Circuit Short To Ground",
    },
    {
        id: "C1438",
        value: "Accelerometer Rear Circuit Short To Battery",
    },
    {
        id: "C1439",
        value: "Vehicle Acceleration EEC-IV Circuit Failure",
    },
    {
        id: "C1440",
        value: "Pressure Transducer Main / Primary signal Faulted",
    },
    {
        id: "C1441",
        value: "Steering Phase A Circuit Signal Is Not Sensed",
    },
    {
        id: "C1442",
        value: "Steering Phase B Circuit Signal Is Not Sensed",
    },
    {
        id: "C1443",
        value: "Steering Phase A Circuit Short To Ground",
    },
    {
        id: "C1444",
        value: "Steering Phase B Circuit Short To Ground",
    },
    {
        id: "C1445",
        value: "Speed Vehicle Signal Circuit Failure",
    },
    {
        id: "C1446",
        value: "Brake Switch Circuit Failure",
    },
    {
        id: "C1447",
        value: "Traction Control Module Request Circuit Failure",
    },
    {
        id: "C1448",
        value: "Lamp Adaptive Damping Warning Circuit Failure",
    },
    {
        id: "C1449",
        value: "Traction Control Motor Coherency Fault",
    },
    {
        id: "C1450",
        value: "Traction Control Motor Circuit Failure",
    },
    {
        id: "C1451",
        value: "Traction Control Motor Circuit Open",
    },
    {
        id: "C1452",
        value: "Traction Control Motor Circuit Short to Battery",
    },
    {
        id: "C1453",
        value: "Traction Control Motor Circuit Short to Ground",
    },
    {
        id: "C1454",
        value: "Front Lateral Accelerometer Circuit Failure",
    },
    {
        id: "C1455",
        value: "Accelerometer Front Circuit Failure",
    },
    {
        id: "C1456",
        value: "Accelerometer Front Circuit Is Not Sensed",
    },
    {
        id: "C1457",
        value: "Accelerometer Front Circuit Short To Ground",
    },
    {
        id: "C1458",
        value: "Accelerometer Front Circuit Short To Battery",
    },
    {
        id: "C1459",
        value: "Adaptive Mode Switch Circuit Failure",
    },
    {
        id: "C1460",
        value: "Vehicle Accelerometer Power Circuit Failure",
    },
    {
        id: "C1461",
        value: "Vehicle Accelerometer Power Circuit Short to Battery",
    },
    {
        id: "C1462",
        value: "Left Front Vertical Accelerometer Circuit Failure",
    },
    {
        id: "C1463",
        value: "Right Front Vertical Accelerometer Circuit Failure",
    },
    {
        id: "C1464",
        value: "Pressure Transducer Redundant / Secondary Signal Faulted",
    },
    {
        id: "C1465",
        value: "Damper High Side Front Circuit Short To Battery",
    },
    {
        id: "C1466",
        value: "Damper Circuit Failure",
    },
    {
        id: "C1467",
        value: "Damper High Side Rear Circuit Short To Battery",
    },
    {
        id: "C1468",
        value: "Damper Low Side Front Circuit Failure",
    },
    {
        id: "C1469",
        value: "Damper Low Side Rear Circuit Failure",
    },
    {
        id: "C1495",
        value: "Traction Control Motor Potentiometer Circuit Failure",
    },
    {
        id: "C1496",
        value: "Traction Control Motor Potentiometer Circuit Open",
    },
    {
        id: "C1497",
        value: "Traction Control Motor Potentiometer Circuit Short to Battery",
    },
    {
        id: "C1498",
        value: "Traction Control Motor Potentiometer Circuit Short to Ground",
    },
    {
        id: "C1499",
        value: 'Transfer Case Contact Plate "A" Encoder Circuit Failure',
    },
    {
        id: "C1500",
        value: 'Transfer Case Contact Plate "B" Encoder Circuit Failure',
    },
    {
        id: "C1501",
        value: 'Transfer Case Contact Plate "C" Encoder Circuit Failure',
    },
    {
        id: "C1502",
        value: 'Transfer Case Contact Plate "D" Encoder Circuit Failure',
    },
    {
        id: "C1503",
        value: "Dynamic Stability Control Left Front Valve Malfunction",
    },
    {
        id: "C1504",
        value: "Dynamic Stability Control Right Front Valve Malfunction",
    },
    {
        id: "C1505",
        value: "Dynamic Stability Control Left Rear Valve Malfunction",
    },
    {
        id: "C1506",
        value: "Dynamic Stability Control Right Rear Valve Malfunction",
    },
    {
        id: "C1507",
        value: "Traction Control of Brake Exceeds Time-Out",
    },
    {
        id: "C1508",
        value: "Traction Control of Engine Exceeds Time-Out",
    },
    {
        id: "C1510",
        value: "Right Front Wheel Pressure Reduction Performance Problem",
    },
    {
        id: "C1511",
        value: "Left Front Wheel Pressure Reduction Performance Problem",
    },
    {
        id: "C1512",
        value: "Right Rear Wheel Pressure Reduction Performance Problem",
    },
    {
        id: "C1513",
        value: "Left rear Wheel Pressure Reduction Performance Problem",
    },
    {
        id: "C1699",
        value: "Left Rear Sensor Circuit Short to Vbat",
    },
    {
        id: "C1700",
        value: "Left Rear Sensor Circuit Failure",
    },
    {
        id: "C1701",
        value: "Left Rear Sensor Circuit Fault",
    },
    {
        id: "C1702",
        value: "RightRear Sensor Circuit Short to Vbat",
    },
    {
        id: "C1703",
        value: "Right Rear Sensor Circuit Failure",
    },
    {
        id: "C1704",
        value: "Right Rear Sensor Circuit Fault",
    },
    {
        id: "C1705",
        value: "Left Rear Center Sensor Circuit Short to Vbat",
    },
    {
        id: "C1706",
        value: "Left Rear Center Sensor Circuit Failure",
    },
    {
        id: "C1707",
        value: "Left Rear Center Sensor Circuit Fault",
    },
    {
        id: "C1708",
        value: "Right Rear Center Sensor Circuit Short to Vbat",
    },
    {
        id: "C1709",
        value: "Right Rear Center Sensor Circuit Failure",
    },
    {
        id: "C1710",
        value: "Right Rear Center Sensor Circuit Fault",
    },
    {
        id: "C1711",
        value: "Left Front Sensor Circuit Short to Vbat",
    },
    {
        id: "C1712",
        value: "Left Front Sensor Circuit Failure",
    },
    {
        id: "C1713",
        value: "Left Front Sensor Circuit Fault",
    },
    {
        id: "C1714",
        value: "Right Front Sensor Circuit Short to Vbat",
    },
    {
        id: "C1715",
        value: "Right Front Sensor Circuit Failure",
    },
    {
        id: "C1716",
        value: "Right Front Sensor Circuit Fault",
    },
    {
        id: "C1717",
        value: "Left Front Center Sensor Circuit Short to Vbat",
    },
    {
        id: "C1718",
        value: "Left Front Center Sensor Circuit Failure",
    },
    {
        id: "C1719",
        value: "Left Front Center Sensor Circuit Fault",
    },
    {
        id: "C1721",
        value: "Air Suspension Height Sensor Power Circuit Open",
    },
    {
        id: "C1722",
        value: "Air Suspension Height Sensor Power Circuit Short To Battery",
    },
    {
        id: "C1723",
        value: "Air Suspension Height Sensor Power Circuit Short To Ground",
    },
    {
        id: "C1724",
        value: "Air Suspension Height Sensor Power Circuit Failure",
    },
    {
        id: "C1725",
        value: "Air Suspension Front Pneumatic Failure",
    },
    {
        id: "C1726",
        value: "Air Suspension Rear Pneumatic Failure",
    },
    {
        id: "C1727",
        value: "Air Suspension Reservoir Pneumatic Failure",
    },
    {
        id: "C1728",
        value: "Transfer  Case unable to transition between 2H and 4H",
    },
    {
        id: "C1729",
        value: "Transfer  Case unable to transition between 4H and 4L",
    },
    {
        id: "C1730",
        value: "Reference Voltage Out of Range (+5 v)",
    },
    {
        id: "C1731",
        value: "Air Suspension LF Corner Up Timeout",
    },
    {
        id: "C1732",
        value: "Air Suspension LF Corner Down Timeout",
    },
    {
        id: "C1733",
        value: "Air Suspension RF Corner Up Timeout",
    },
    {
        id: "C1734",
        value: "Air Suspension RF Corner Down Timeout",
    },
    {
        id: "C1735",
        value: "Air Suspension LR Corner Up Timeout",
    },
    {
        id: "C1736",
        value: "Air Suspension LR Corner Down Timeout",
    },
    {
        id: "C1737",
        value: "Air Suspension RR Corner Up Timeout",
    },
    {
        id: "C1738",
        value: "Air Suspension RR Corner Down Timeout",
    },
    {
        id: "C1739",
        value: "Right Front Center Sensor Circuit Short to Vbat",
    },
    {
        id: "C1740",
        value: "Right Front Center Sensor Circuit Failure",
    },
    {
        id: "C1741",
        value: "Right Front Center Sensor Circuit Fault",
    },
    {
        id: "C1742",
        value: "Rear Sounder Circuit Failure",
    },
    {
        id: "C1743",
        value: "Rear Sounder Circuit Short to Vbatt",
    },
    {
        id: "C1744",
        value: "Front Sounder Circuit Failure",
    },
    {
        id: "C1745",
        value: "Front Sounder Circuit Short to Vbatt",
    },
    {
        id: "C1748",
        value: "Switch input Circuit Short to Gnd",
    },
    {
        id: "C1749",
        value: "Trailer Input Circuit Failure",
    },
    {
        id: "C1750",
        value: "Accelerator Position Sensor Out of Range",
    },
    {
        id: "C1751",
        value: "Vehicle Speed Sensor # 1 Output Circuit Short to Vbatt",
    },
    {
        id: "C1752",
        value: "Vehicle Speed Sensor # 1 Output Circuit Short to Gnd",
    },
    {
        id: "C1753",
        value: "Hydraulic Clutch Actuator Valve Signal Fault",
    },
    {
        id: "C1754",
        value: "Hydraulic Clutch Actuator Valve Circuit Failure",
    },
    {
        id: "C1755",
        value: "Power Limit Shutdown Fault",
    },
    {
        id: "C1756",
        value: "Air Suspension Front Height Sensor High (SE) Signal Circuit Failure",
    },
    {
        id: "C1757",
        value: "Air Suspension Front Height Sensor High (SE) Signal Circuit Open",
    },
    {
        id: "C1758",
        value: "Air Suspension Front Height Sensor High (SE) Signal Circuit Short To Battery",
    },
    {
        id: "C1759",
        value: "Air Suspension Front Height Sensor High (SE) Signal Circuit Short To Ground",
    },
    {
        id: "C1760",
        value: "Air Suspension Rear Height Sensor High (SE) Signal Circuit Failure",
    },
    {
        id: "C1761",
        value: "Air Suspension Rear Height Sensor High (SE) Signal Circuit Open",
    },
    {
        id: "C1762",
        value: "Air Suspension Rear Height Sensor High (SE) Signal Circuit Short To Battery",
    },
    {
        id: "C1763",
        value: "Air Suspension Rear Height Sensor High (SE) Signal Circuit Short To Ground",
    },
    {
        id: "C1765",
        value: "Air Suspension Rear Height Sensor Low Signal Circuit Failure",
    },
    {
        id: "C1766",
        value: "Air Suspension Rear Height Sensor Low Signal Circuit Open",
    },
    {
        id: "C1767",
        value: "Air Suspension Rear Height Sensor Low Signal Circuit Short To Battery",
    },
    {
        id: "C1768",
        value: "Air Suspension Rear Height Sensor Low Signal Circuit Short To Ground",
    },
    {
        id: "C1770",
        value: "Air Suspension Vent Solenoid Output Circuit Failure",
    },
    {
        id: "C1771",
        value: "Air Suspension Vent Solenoid Output Circuit Open",
    },
    {
        id: "C1772",
        value: "Air Suspension Vent Solenoid Output Circuit Short To Battery",
    },
    {
        id: "C1773",
        value: "Air Suspension Vent Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1774",
        value: "Coolant Temp Out of Range",
    },
    {
        id: "C1775",
        value: "DC-DC Converter Failure",
    },
    {
        id: "C1776",
        value: "Heater System Failure",
    },
    {
        id: "C1777",
        value: "Vacuum Pressure Circuit Failure",
    },
    {
        id: "C1778",
        value: "Power Steering Failure",
    },
    {
        id: "C1779",
        value: "Blower Switch Failure",
    },
    {
        id: "C1780",
        value: "Temperature Select Failure",
    },
    {
        id: "C1781",
        value: "Engine Coolant Temperature Signal Missing/Fault",
    },
    {
        id: "C1790",
        value: "Air Suspension LR Air Spring/Shock Solenoid Output Circuit Failure",
    },
    {
        id: "C1791",
        value: "Air Suspension LR Air Spring/Shock Solenoid Output Circuit Open",
    },
    {
        id: "C1792",
        value: "Air Suspension LR Air Spring/Shock Solenoid Output Circuit Short To Battery",
    },
    {
        id: "C1793",
        value: "Air Suspension LR Air Spring/Shock Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1795",
        value: "Air Suspension RR Air Spring/Shock Solenoid Output Circuit Failure",
    },
    {
        id: "C1796",
        value: "Air Suspension RR Air Spring/Shock Solenoid Output Circuit Open",
    },
    {
        id: "C1797",
        value: "Air Suspension RR Air Spring/Shock Solenoid Output Circuit Short To Battery",
    },
    {
        id: "C1798",
        value: "Air Suspension RR Air Spring/Shock Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1800",
        value: "Air Suspension Reservoir Solenoid Circuit Failure",
    },
    {
        id: "C1805",
        value: "Mismatched PCM and/or ABS-TC Module",
    },
    {
        id: "C1813",
        value: "Air Suspension LR Vent Request Exceeded Max Timing",
    },
    {
        id: "C1814",
        value: "Air Suspension RR Vent Request Exceeded Max Timing",
    },
    {
        id: "C1818",
        value: "Air Suspension LR Air Compress Request Exceeded Max Timing",
    },
    {
        id: "C1819",
        value: "Air Suspension RR Air Compress Request Exceeded Max Timing",
    },
    {
        id: "C1820",
        value: "Air Suspension RF Air Compress Request Exceeded Max Timing",
    },
    {
        id: "C1830",
        value: "Air Suspension Compressor Relay Circuit Failure",
    },
    {
        id: "C1831",
        value: "Air Suspension Compressor Relay Circuit Open",
    },
    {
        id: "C1832",
        value: "Air Suspension Compressor Relay Circuit Short To Battery",
    },
    {
        id: "C1833",
        value: "Air Suspension Compressor  Relay Circuit Short To Ground",
    },
    {
        id: "C1834",
        value: "Gauge Drive Current Fault",
    },
    {
        id: "C1835",
        value: "Current Sense Circuit Failure",
    },
    {
        id: "C1836",
        value: "Battery Temp out of Range",
    },
    {
        id: "C1837",
        value: "Battery Heater Circuit Failure",
    },
    {
        id: "C1838",
        value: "Charging System Fault",
    },
    {
        id: "C1839",
        value: "Leakage Fault",
    },
    {
        id: "C1840",
        value: "Air Suspension Disable Switch Circuit Failure",
    },
    {
        id: "C1841",
        value: "Air Suspension Disable Switch Circuit Open",
    },
    {
        id: "C1842",
        value: "Air Suspension Disable Switch Circuit Short To Battery",
    },
    {
        id: "C1843",
        value: "Air Suspension Disable Switch Circuit Short To Ground",
    },
    {
        id: "C1844",
        value: "Air Suspension Secondary Front Inflator Solenoid Output Circuit Failure",
    },
    {
        id: "C1845",
        value: "Air Suspension Front Inflator Solenoid Output Circuit Failure",
    },
    {
        id: "C1846",
        value: "Air Suspension Front Inflator Solenoid Output Circuit Open",
    },
    {
        id: "C1847",
        value: "Air Suspension Front Inflator Solenoid Output Circuit Short To  Battery",
    },
    {
        id: "C1848",
        value: "Air Suspension Front Inflator Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1849",
        value: "Master Cylinder Pressure Out of Range",
    },
    {
        id: "C1850",
        value: "Air Suspension Warning Lamp Circuit Failure",
    },
    {
        id: "C1851",
        value: "Air Suspension Warning Lamp Circuit Open",
    },
    {
        id: "C1852",
        value: "Air Suspension Warning Lamp Circuit Short To Battery",
    },
    {
        id: "C1853",
        value: "Air Suspension Warning Lamp Circuit Short To Ground",
    },
    {
        id: "C1854",
        value: "Motor Temperature Out of Range",
    },
    {
        id: "C1855",
        value: "Acceleration Position Sensor Conflict",
    },
    {
        id: "C1856",
        value: "Traction Motor Encoder  circuit Failure",
    },
    {
        id: "C1859",
        value: "PRNDL Input #2 Circuit Failure",
    },
    {
        id: "C1860",
        value: "PRNDL Input #3 Circuit Failure",
    },
    {
        id: "C1861",
        value: "PRNDL Input #4 Circuit Failure",
    },
    {
        id: "C1862",
        value: "Contactor Circuit Failure",
    },
    {
        id: "C1863",
        value: "External Charging Fault",
    },
    {
        id: "C1864",
        value: "Battery Module Fault",
    },
    {
        id: "C1865",
        value: "Air Suspension Rear Inflator Solenoid Output Circuit Failure",
    },
    {
        id: "C1866",
        value: "Air Suspension Rear Inflator Solenoid Output Circuit Open",
    },
    {
        id: "C1867",
        value: "Air Suspension Rear Inflator Solenoid Output Circuit Short To  Battery",
    },
    {
        id: "C1868",
        value: "Air Suspension Rear Inflator Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1869",
        value: "Air Suspension Gate Solenoid Output Circuit Failure",
    },
    {
        id: "C1870",
        value: "Air Suspension Gate Solenoid Output Circuit Open",
    },
    {
        id: "C1871",
        value: "Air Suspension Gate Solenoid Output Circuit Short To  Battery",
    },
    {
        id: "C1872",
        value: "Air Suspension Gate Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1873",
        value: "Air Suspension RF Air Spring Solenoid Output Circuit Failure",
    },
    {
        id: "C1874",
        value: "Air Suspension RF Air Spring Solenoid Output Circuit Open",
    },
    {
        id: "C1875",
        value: "Air Suspension RF Air Spring Solenoid Output Circuit Short To Battery",
    },
    {
        id: "C1876",
        value: "Air Suspension RF Air Spring Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1877",
        value: "Air Suspension LF Air Spring Solenoid Output Circuit Failure",
    },
    {
        id: "C1878",
        value: "Air Suspension LF Air Spring Solenoid Output Circuit Open",
    },
    {
        id: "C1879",
        value: "Air Suspension LF Air Spring Solenoid Output Circuit Short To Battery",
    },
    {
        id: "C1880",
        value: "Air Suspension LF Air Spring Solenoid Output Circuit Short To Ground",
    },
    {
        id: "C1881",
        value: "Air Suspension RF Height Sensor Circuit Failure",
    },
    {
        id: "C1882",
        value: "Air Suspension RF Height Sensor Circuit Open",
    },
    {
        id: "C1883",
        value: "Air Suspension RF Height Sensor Circuit Short To Battery",
    },
    {
        id: "C1884",
        value: "Air Suspension RF Height Sensor Circuit Short To Ground",
    },
    {
        id: "C1885",
        value: "Air Suspension RR Height Sensor Circuit Failure",
    },
    {
        id: "C1886",
        value: "Air Suspension RR Height Sensor Circuit Open",
    },
    {
        id: "C1887",
        value: "Air Suspension RR Height Sensor Circuit Short To Battery",
    },
    {
        id: "C1888",
        value: "Air Suspension RR Height Sensor Circuit Short To Ground",
    },
    {
        id: "C1889",
        value: "Air Suspension LF Height Sensor Circuit Failure",
    },
    {
        id: "C1890",
        value: "Air Suspension LF Height Sensor Circuit Open",
    },
    {
        id: "C1891",
        value: "Air Suspension LF Height Sensor Circuit Short To Battery",
    },
    {
        id: "C1892",
        value: "Air Suspension LF Height Sensor Circuit Short To Ground",
    },
    {
        id: "C1893",
        value: "Air Suspension LR Height Sensor Circuit Failure",
    },
    {
        id: "C1894",
        value: "Air Suspension LR Height Sensor Circuit Open",
    },
    {
        id: "C1895",
        value: "Air Suspension LR Height Sensor Circuit Short To Battery",
    },
    {
        id: "C1896",
        value: "Air Suspension LR Height Sensor Circuit Short To Ground",
    },
    {
        id: "C1897",
        value: "Steering VAPS II Circuit Loop Failure",
    },
    {
        id: "C1898",
        value: "Steering VAPS II Circuit Loop Open",
    },
    {
        id: "C1899",
        value: "Steering VAPS II Circuit Loop Short To Battery",
    },
    {
        id: "C1900",
        value: "Steering VAPS II Circuit Loop Short To Ground",
    },
    {
        id: "C1901",
        value: "Ride Control RR Shock Actuator Circuit Failure",
    },
    {
        id: "C1902",
        value: "Ride Control RR Shock Actuator Circuit Open",
    },
    {
        id: "C1903",
        value: "Ride Control RR Shock Actuator Circuit Short To Battery",
    },
    {
        id: "C1904",
        value: "Ride Control RR Shock Actuator Circuit Short To Ground",
    },
    {
        id: "C1905",
        value: "Ride Control LR Shock Actuator Circuit Failure",
    },
    {
        id: "C1906",
        value: "Ride Control LR Shock Actuator Circuit Open",
    },
    {
        id: "C1907",
        value: "Ride Control LR Shock Actuator Circuit Short To Battery",
    },
    {
        id: "C1908",
        value: "Ride Control LR Shock Actuator Circuit Short To Ground",
    },
    {
        id: "C1909",
        value: "Ride Control RF Shock Actuator Circuit Failure",
    },
    {
        id: "C1910",
        value: "Ride Control RF Shock Actuator Circuit Open",
    },
    {
        id: "C1911",
        value: "Ride Control RF Shock Actuator Circuit Short To Battery",
    },
    {
        id: "C1912",
        value: "Ride Control RF Shock Actuator Circuit Short To Ground",
    },
    {
        id: "C1913",
        value: "Ride Control LF Shock Actuator Circuit Failure",
    },
    {
        id: "C1914",
        value: "Ride Control LF Shock Actuator Circuit Open",
    },
    {
        id: "C1915",
        value: "Ride Control LF Shock Actuator Circuit Short To Battery",
    },
    {
        id: "C1916",
        value: "Ride Control LF Shock Actuator Circuit Short To Ground",
    },
    {
        id: "C1917",
        value: "Steering EVO Out-of-Range Fault",
    },
    {
        id: "C1918",
        value: "Air Suspension Ride Height Select Switch Circuit Failure",
    },
    {
        id: "C1920",
        value: "Led #1 Circuit Failure",
    },
    {
        id: "C1921",
        value: "VAPS Solenoid Actuator Output Circuit Failure",
    },
    {
        id: "C1922",
        value: "VAPS Solenoid Actuator Output Circuit Open",
    },
    {
        id: "C1923",
        value: "VAPS Solenoid Actuator Output Circuit Short To Battery",
    },
    {
        id: "C1924",
        value: "VAPS Solenoid Actuator Output Circuit Short To Ground",
    },
    {
        id: "C1925",
        value: "VAPS Solenoid Actuator Return Circuit Failure",
    },
    {
        id: "C1926",
        value: "VAPS Solenoid Actuator Return Circuit Open",
    },
    {
        id: "C1927",
        value: "VAPS Solenoid Actuator Return Circuit Short To Battery",
    },
    {
        id: "C1928",
        value: "VAPS Solenoid Actuator Return Circuit Short To Ground",
    },
    {
        id: "C1929",
        value: "Air Suspension Front Compressor Relay Circuit Failure",
    },
    {
        id: "C1930",
        value: "Air Suspension Front Compressor Relay Circuit Open",
    },
    {
        id: "C1931",
        value: "Air Suspension Front Compressor Relay Circuit Short To Battery",
    },
    {
        id: "C1932",
        value: "Air Suspension Front Compressor Relay Circuit Short To Ground",
    },
    {
        id: "C1933",
        value: "Solenoid Current Out Of Range",
    },
    {
        id: "C1934",
        value: "HPU (Hydraulic Pump Unit) Pressurisation Failure",
    },
    {
        id: "C1935",
        value: "Chime Circuit Failure",
    },
    {
        id: "C1936",
        value: "Hydraulic Pump Relay Circuit Failure",
    },
    {
        id: "C1937",
        value: "Steering Wheel Angle Sensor Offset Failure",
    },
    {
        id: "C1938",
        value: "Invalid Steering Wheel Angle Sensor ID",
    },
    {
        id: "C1939",
        value: "Brake Pressure Switch Input Circuit Failure",
    },
    {
        id: "C1940",
        value: "Brake Pressure Switch Mechanical Failure",
    },
    {
        id: "C1942",
        value: "Unrecognized Powertrain Configuration",
    },
    {
        id: "C1943",
        value: "Airbag Deployment Indication Input Fault",
    },
    {
        id: "C1944",
        value: "Gauge Driver Circuit Fault",
    },
    {
        id: "C1945",
        value: "Park Switch Indicates Park with Vehicle Moving",
    },
    {
        id: "C1946",
        value: "Seat Track Position Switch Circuit Open",
    },
    {
        id: "C1947",
        value: "Seat Track Position Switch Circuit Short to Ground",
    },
    {
        id: "C1948",
        value: "Seat Track Position Switch Circuit Resistance Out of Range",
    },
    {
        id: "C1949",
        value: "Accelerometer Sensor Circuit Open",
    },
    {
        id: "C1950",
        value: "Accelerometer Sensor Circuit Failure",
    },
    {
        id: "C1951",
        value: "Lateral Accelerometer Sensor Circuit Open",
    },
    {
        id: "C1952",
        value: "Yaw Rate Sensor Circuit Open",
    },
    {
        id: "C1953",
        value: "Master Cylinder Pressure Sensor Circuit Open",
    },
    {
        id: "C1954",
        value: "Master Cylinder Pressure Sensor Circuit Failure",
    },
    {
        id: "C1955",
        value: "Steering Angle Sensor Circuit Open",
    },
    {
        id: "C1956",
        value: "Steering Angle Sensor Circuit Failure",
    },
    {
        id: "C1957",
        value: "Dynamic Stability Control Valve RF Circuit Failure",
    },
    {
        id: "C1958",
        value: "Dynamic Stability Control Valve LF Circuit Failure",
    },
    {
        id: "C1959",
        value: "Lateral Accelerometer Sensor Circuit Failure",
    },
    {
        id: "C1960",
        value: "Driver Brake Apply Circuit Fault",
    },
    {
        id: "C1961",
        value: "Park Lamp Relay Coil Circuit Failure",
    },
    {
        id: "C1962",
        value: "Park Lamp Relay Coil Short to Battery",
    },
    {
        id: "C1963",
        value: "Stability Control Inhibit Warning",
    },
    {
        id: "C2767",
        value: "Reserved - TBD",
    },
    {
        id: "U1000",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1001",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1002",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1003",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1004",
        value: "SCP (J1850) Invalid or Missing Data for EEC Programming",
    },
    {
        id: "U1005",
        value: "SCP (J1850) Invalid or Missing Data for EEC Programming",
    },
    {
        id: "U1006",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1007",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1008",
        value: "SCP (J1850) Invalid or Missing Data for Engine Torque",
    },
    {
        id: "U1009",
        value: "SCP (J1850) Invalid or Missing Data for Engine Torque",
    },
    {
        id: "U1010",
        value: "SCP (J1850) Invalid or Missing Data for Engine Air Intake",
    },
    {
        id: "U1011",
        value: "SCP (J1850) Invalid or Missing Data for Engine Air Intake",
    },
    {
        id: "U1012",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1013",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1014",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1015",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1016",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1017",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1018",
        value: "SCP (J1850) Invalid or Missing Data for Throttle",
    },
    {
        id: "U1019",
        value: "SCP (J1850) Invalid or Missing Data for Throttle",
    },
    {
        id: "U1020",
        value: "SCP (J1850) Invalid or Missing Data for Air Conditioning Clutch",
    },
    {
        id: "U1021",
        value: "SCP (J1850) Invalid or Missing Data for Air Conditioning Clutch",
    },
    {
        id: "U1022",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1023",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1024",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1025",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1026",
        value: "SCP (J1850) Invalid or Missing Data for Engine RPM",
    },
    {
        id: "U1027",
        value: "SCP (J1850) Invalid or Missing Data for Engine RPM",
    },
    {
        id: "U1028",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1029",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1030",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #1",
    },
    {
        id: "U1031",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #1",
    },
    {
        id: "U1032",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1033",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1034",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1035",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1036",
        value: "SCP (J1850) Invalid or Missing Data for Wheels",
    },
    {
        id: "U1037",
        value: "SCP (J1850) Invalid or Missing Data for Wheels",
    },
    {
        id: "U1038",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1039",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id / Vehicle Speed",
    },
    {
        id: "U1040",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Speed",
    },
    {
        id: "U1041",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Speed",
    },
    {
        id: "U1042",
        value: "SCP (J1850) Invalid or Missing Data for Traction Control",
    },
    {
        id: "U1043",
        value: "SCP (J1850) Invalid or Missing Data for Traction Control",
    },
    {
        id: "U1044",
        value: "SCP (J1850) Invalid or Missing Data for Traction Motor",
    },
    {
        id: "U1045",
        value: "SCP (J1850) Invalid or Missing Data for Traction Motor",
    },
    {
        id: "U1046",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1047",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1048",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1049",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1050",
        value: "SCP (J1850) Invalid or Missing Data for Brakes",
    },
    {
        id: "U1051",
        value: "SCP (J1850) Invalid or Missing Data for Brakes",
    },
    {
        id: "U1052",
        value: "SCP (J1850) Invalid or Missing Data for Steering / Steering Wheel",
    },
    {
        id: "U1053",
        value: "SCP (J1850) Invalid or Missing Data for Steering / Steering Wheel",
    },
    {
        id: "U1054",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1055",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1056",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Configuration",
    },
    {
        id: "U1057",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Configuration",
    },
    {
        id: "U1058",
        value: "SCP (J1850) Invalid or Missing Data for Transmission / Transaxle / PRNDL",
    },
    {
        id: "U1059",
        value: "SCP (J1850) Invalid or Missing Data for Transmission / Transaxle / PRNDL",
    },
    {
        id: "U1060",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1061",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1062",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1063",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1064",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1065",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1066",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1067",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1068",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1069",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1070",
        value: "SCP (J1850) Invalid or Missing Data for Engine Sensors",
    },
    {
        id: "U1071",
        value: "SCP (J1850) Invalid or Missing Data for Engine Sensors",
    },
    {
        id: "U1072",
        value: "SCP (J1850) Invalid or Missing Data for Engine Coolant",
    },
    {
        id: "U1073",
        value: "SCP (J1850) Invalid or Missing Data for Engine Coolant",
    },
    {
        id: "U1074",
        value: "SCP (J1850) Invalid or Missing Data for Engine Oil",
    },
    {
        id: "U1075",
        value: "SCP (J1850) Invalid or Missing Data for Engine Oil Temp",
    },
    {
        id: "U1076",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1077",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1078",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1079",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1080",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1081",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1082",
        value: "SCP (J1850) Invalid or Missing Data for Engine Systems Other",
    },
    {
        id: "U1083",
        value: "SCP (J1850) Invalid or Missing Data for Engine Systems Other",
    },
    {
        id: "U1084",
        value: "SCP (J1850) Invalid or Missing Data for Powertrain Status Request",
    },
    {
        id: "U1085",
        value: "SCP (J1850) Invalid or Missing Data for Powertrain Status Request",
    },
    {
        id: "U1086",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1087",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1088",
        value: "SCP (J1850) Invalid or Missing Data for Suspension",
    },
    {
        id: "U1089",
        value: "SCP (J1850) Invalid or Missing Data for Suspension",
    },
    {
        id: "U1090",
        value: "SCP (J1850) Invalid or Missing Data for Non-Legislated Diagnostics",
    },
    {
        id: "U1091",
        value: "SCP (J1850) Invalid or Missing Data for Non-Legislated Diagnostics",
    },
    {
        id: "U1092",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1093",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1094",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #2",
    },
    {
        id: "U1095",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #2",
    },
    {
        id: "U1096",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1097",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1098",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Speed Control",
    },
    {
        id: "U1099",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Speed Control",
    },
    {
        id: "U1100",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1101",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1102",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1103",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1104",
        value: "SCP (J1850) Invalid or Missing Data for Chassis Status Request",
    },
    {
        id: "U1105",
        value: "SCP (J1850) Invalid or Missing Data for Chassis Status Request",
    },
    {
        id: "U1106",
        value: "SCP (J1850) Invalid or Missing Data for Legislated Diagnostics",
    },
    {
        id: "U1107",
        value: "SCP (J1850) Invalid or Missing Data for Legislated Diagnostics",
    },
    {
        id: "U1108",
        value: "SCP (J1850) Invalid or Missing Data for Electric Traction Drive (Inverter)",
    },
    {
        id: "U1109",
        value: "SCP (J1850) Invalid or Missing Data for Electric Traction Drive (Inverter)",
    },
    {
        id: "U1110",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1111",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1112",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1113",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1114",
        value: "SCP (J1850) Invalid or Missing Data for Charging System",
    },
    {
        id: "U1115",
        value: "SCP (J1850) Invalid or Missing Data for Charging System",
    },
    {
        id: "U1116",
        value: "SCP (J1850) Invalid or Missing Data for Electrical Energy Management",
    },
    {
        id: "U1117",
        value: "SCP (J1850) Invalid or Missing Data for Electrical Energy Management",
    },
    {
        id: "U1118",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1119",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1120",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1121",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1122",
        value: "SCP (J1850) Invalid or Missing Data for Odometer",
    },
    {
        id: "U1123",
        value: "SCP (J1850) Invalid or Missing Data for Odometer",
    },
    {
        id: "U1124",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1125",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1126",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1127",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1128",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1129",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1130",
        value: "SCP (J1850) Invalid or Missing Data for Fuel System",
    },
    {
        id: "U1131",
        value: "SCP (J1850) Invalid or Missing Data for Fuel System",
    },
    {
        id: "U1132",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Motion",
    },
    {
        id: "U1133",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Motion",
    },
    {
        id: "U1134",
        value: "SCP (J1850) Invalid or Missing Data for Ignition Switch / Starter",
    },
    {
        id: "U1135",
        value: "SCP (J1850) Invalid or Missing Data for Ignition Switch / Starter",
    },
    {
        id: "U1136",
        value: "SCP (J1850) Invalid or Missing Data for Telltales",
    },
    {
        id: "U1137",
        value: "SCP (J1850) Invalid or Missing Data for Telltales",
    },
    {
        id: "U1138",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1139",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1140",
        value: "SCP (J1850) Invalid or Missing Data for Gateway",
    },
    {
        id: "U1141",
        value: "SCP (J1850) Invalid or Missing Data for Gateway",
    },
    {
        id: "U1142",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1143",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1144",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1145",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1146",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Security",
    },
    {
        id: "U1147",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Security",
    },
    {
        id: "U1148",
        value: "SCP (J1850) Invalid or Missing Data for Audio Control",
    },
    {
        id: "U1149",
        value: "SCP (J1850) Invalid or Missing Data for Audio Control",
    },
    {
        id: "U1150",
        value: "SCP (J1850) Invalid or Missing Data for Audible Warnings",
    },
    {
        id: "U1151",
        value: "SCP (J1850) Invalid or Missing Data for Audible Warnings",
    },
    {
        id: "U1152",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #3",
    },
    {
        id: "U1153",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #3",
    },
    {
        id: "U1154",
        value: "SCP (J1850) Invalid or Missing Data for Compact Disc",
    },
    {
        id: "U1155",
        value: "SCP (J1850) Invalid or Missing Data for Compact Disc",
    },
    {
        id: "U1156",
        value: "SCP (J1850) Invalid or Missing Data for Digital Signal Processing",
    },
    {
        id: "U1157",
        value: "SCP (J1850) Invalid or Missing Data for Digital Signal Processing",
    },
    {
        id: "U1158",
        value: "SCP (J1850) Invalid or Missing Data for Antenna",
    },
    {
        id: "U1159",
        value: "SCP (J1850) Invalid or Missing Data for Antenna",
    },
    {
        id: "U1160",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1161",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1162",
        value: "SCP (J1850) Invalid or Missing Data for Digital Audio Tape",
    },
    {
        id: "U1163",
        value: "SCP (J1850) Invalid or Missing Data for Digital Audio Tape",
    },
    {
        id: "U1164",
        value: "SCP (J1850) Invalid or Missing Data for Tuner / Receiver",
    },
    {
        id: "U1165",
        value: "SCP (J1850) Invalid or Missing Data for Tuner / Receiver",
    },
    {
        id: "U1166",
        value: "SCP (J1850) Invalid or Missing Data for Cassette Tape",
    },
    {
        id: "U1167",
        value: "SCP (J1850) Invalid or Missing Data for Cassette Tape",
    },
    {
        id: "U1168",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1169",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1170",
        value: "SCP (J1850) Invalid or Missing Data for Cellular Phone / Paging System",
    },
    {
        id: "U1171",
        value: "SCP (J1850) Invalid or Missing Data for Cellular Phone / Paging System",
    },
    {
        id: "U1172",
        value: "SCP (J1850) Invalid or Missing Data for Remote Button Control",
    },
    {
        id: "U1173",
        value: "SCP (J1850) Invalid or Missing Data for Remote Button Control",
    },
    {
        id: "U1174",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1175",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1176",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1177",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1178",
        value: "SCP (J1850) Invalid or Missing Data for Climate Control (HVAC)",
    },
    {
        id: "U1179",
        value: "SCP (J1850) Invalid or Missing Data for Climate Control (HVAC)",
    },
    {
        id: "U1180",
        value: "SCP (J1850) Invalid or Missing Data for Personalization (Memory) Features",
    },
    {
        id: "U1181",
        value: "SCP (J1850) Invalid or Missing Data for Personalization (Memory) Features",
    },
    {
        id: "U1182",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1183",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1184",
        value: "SCP (J1850) Invalid or Missing Data for Window Wiper / Washer",
    },
    {
        id: "U1185",
        value: "SCP (J1850) Invalid or Missing Data for Window Wiper / Washer",
    },
    {
        id: "U1186",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1187",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1188",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1189",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1190",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1191",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1192",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1193",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1194",
        value: "SCP (J1850) Invalid or Missing Data for Mirrors",
    },
    {
        id: "U1195",
        value: "SCP (J1850) Invalid or Missing Data for Mirrors",
    },
    {
        id: "U1196",
        value: "SCP (J1850) Invalid or Missing Data for Door Locks",
    },
    {
        id: "U1197",
        value: "SCP (J1850) Invalid or Missing Data for Door Locks",
    },
    {
        id: "U1198",
        value: "SCP (J1850) Invalid or Missing Data for External Access (Doors)",
    },
    {
        id: "U1199",
        value: "SCP (J1850) Invalid or Missing Data for External Access (Doors)",
    },
    {
        id: "U1200",
        value: "SCP (J1850) Invalid or Missing Data for Seat Motion / Control",
    },
    {
        id: "U1201",
        value: "SCP (J1850) Invalid or Missing Data for Seat Motion / Control",
    },
    {
        id: "U1202",
        value: "SCP (J1850) Invalid or Missing Data for Windows",
    },
    {
        id: "U1203",
        value: "SCP (J1850) Invalid or Missing Data for Windows",
    },
    {
        id: "U1204",
        value: "SCP (J1850) Invalid or Missing Data for Steering Column",
    },
    {
        id: "U1205",
        value: "SCP (J1850) Invalid or Missing Data for Steering Column",
    },
    {
        id: "U1206",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1207",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1208",
        value: "SCP (J1850) Invalid or Missing Data for Seat Switches",
    },
    {
        id: "U1209",
        value: "SCP (J1850) Invalid or Missing Data for Seat Switches",
    },
    {
        id: "U1210",
        value: "SCP (J1850) Invalid or Missing Data for Restraints",
    },
    {
        id: "U1211",
        value: "SCP (J1850) Invalid or Missing Data for Restraints",
    },
    {
        id: "U1212",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1213",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1214",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1215",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1216",
        value: "SCP (J1850) Invalid or Missing Data for External Lamp Outage",
    },
    {
        id: "U1217",
        value: "SCP (J1850) Invalid or Missing Data for External Lamp Outage",
    },
    {
        id: "U1218",
        value: "SCP (J1850) Invalid or Missing Data for External Lamps",
    },
    {
        id: "U1219",
        value: "SCP (J1850) Invalid or Missing Data for External Lamps",
    },
    {
        id: "U1220",
        value: "SCP (J1850) Invalid or Missing Data for Interior Lamp Outage",
    },
    {
        id: "U1221",
        value: "SCP (J1850) Invalid or Missing Data for Interior Lamp Outage",
    },
    {
        id: "U1222",
        value: "SCP (J1850) Invalid or Missing Data for Interior Lamps",
    },
    {
        id: "U1223",
        value: "SCP (J1850) Invalid or Missing Data for Interior Lamps",
    },
    {
        id: "U1224",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1225",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1226",
        value: "SCP (J1850) Invalid or Missing Data for Body Status Request",
    },
    {
        id: "U1227",
        value: "SCP (J1850) Invalid or Missing Data for Body Status Request",
    },
    {
        id: "U1228",
        value: "SCP (J1850) Invalid or Missing Data for Tires",
    },
    {
        id: "U1229",
        value: "SCP (J1850) Invalid or Missing Data for Tires",
    },
    {
        id: "U1230",
        value: "SCP (J1850) Invalid or Missing Data for Electric Defrost",
    },
    {
        id: "U1231",
        value: "SCP (J1850) Invalid or Missing Data for Electric Defrost",
    },
    {
        id: "U1232",
        value: "SCP (J1850) Invalid or Missing Data for Navigation",
    },
    {
        id: "U1233",
        value: "SCP (J1850) Invalid or Missing Data for Navigation",
    },
    {
        id: "U1234",
        value: "SCP (J1850) Invalid or Missing Data for Displays",
    },
    {
        id: "U1235",
        value: "SCP (J1850) Invalid or Missing Data for Displays",
    },
    {
        id: "U1236",
        value: "SCP (J1850) Invalid or Missing Data for Memory Storage",
    },
    {
        id: "U1237",
        value: "SCP (J1850) Invalid or Missing Data for Memory Storage",
    },
    {
        id: "U1238",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #4",
    },
    {
        id: "U1239",
        value: "SCP (J1850) Invalid or Missing Data for Experimental #4",
    },
    {
        id: "U1240",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1241",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1242",
        value: "SCP (J1850) Invalid or Missing Data for Exterior Environment",
    },
    {
        id: "U1243",
        value: "SCP (J1850) Invalid or Missing Data for Exterior Environment",
    },
    {
        id: "U1244",
        value: "SCP (J1850) Invalid or Missing Data for Interior Environment",
    },
    {
        id: "U1245",
        value: "SCP (J1850) Invalid or Missing Data for Interior Environment",
    },
    {
        id: "U1246",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1247",
        value: "SCP (J1850) Invalid or Missing Data for Primary Id",
    },
    {
        id: "U1248",
        value: "SCP (J1850) Invalid or Missing Data for Time / Date",
    },
    {
        id: "U1249",
        value: "SCP (J1850) Invalid or Missing Data for Time / Date",
    },
    {
        id: "U1250",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Id (VIN)",
    },
    {
        id: "U1251",
        value: "SCP (J1850) Invalid or Missing Data for Vehicle Id (VIN)",
    },
    {
        id: "U1252",
        value: "SCP (J1850) Invalid or Missing Data for Class A Functions",
    },
    {
        id: "U1253",
        value: "SCP (J1850) Invalid or Missing Data for Class A Functions",
    },
    {
        id: "U1254",
        value: "SCP (J1850) Invalid or Missing Data for Network Control",
    },
    {
        id: "U1255",
        value: "SCP (J1850) Invalid or Missing Data for Network Control",
    },
    {
        id: "U1260",
        value: "SCP (J1850) Single Ended (+) Circuit Failure",
    },
    {
        id: "U1261",
        value: "SCP (J1850) Single Ended (-) Circuit Failure",
    },
    {
        id: "U1262",
        value: "SCP (J1850) Communication Bus Fault",
    },
    {
        id: "U1308",
        value: "SCP (J1850) Invalid or Missing Data for Function Read  Engine Torque",
    },
    {
        id: "U1341",
        value: "SCP (J1850) Invalid or Missing Data for Function Read Vehicle Speed",
    },
    {
        id: "U1430",
        value: "SCP (J1850) Invalid or Missing Data for Function Read Fuel System",
    },
    {
        id: "U1451",
        value: "SCP (J1850) Invalid or Missing Data for Function Read Audible Warnings /Anti-Theft Module",
    },
    {
        id: "U1612",
        value: "SCP (J1850) Lack of Acknowledgment for Primary Id",
    },
    {
        id: "U1736",
        value: "SCP (J1850) Lack of Acknowledgment for  Telltales",
    },
    {
        id: "U1750",
        value: "SCP (J1850) Lack of Acknowledgment for  Audible Warnings",
    },
    {
        id: "U1794",
        value: "SCP (J1850) Lack of Acknowledgment for Mirrors",
    },
    {
        id: "U1797",
        value: "SCP (J1850) Lack of Acknowledgment for  Door Locks",
    },
    {
        id: "U1798",
        value: "SCP (J1850) Lack of Acknowledgment for  External Access (Doors)",
    },
    {
        id: "U1806",
        value: "SCP (J1850) Lack of Acknowledgment for Primary Id",
    },
    {
        id: "U1900",
        value: "CAN Communication Bus Fault",
    },
    {
        id: "U1950",
        value: "UPB Communication Bus Fault",
    },
    {
        id: "U2000",
        value: "Audio Rear Control Unit is Not Responding",
    },
    {
        id: "U2001",
        value: "Audio Tape Deck Unit is Not Responding",
    },
    {
        id: "U2002",
        value: "Audio Bezel is Not Responding",
    },
    {
        id: "U2003",
        value: "Audio Compact Disk / Disk Jockey Unit is Not Responding",
    },
    {
        id: "U2004",
        value: "Audio Steering Wheel Control Unit is Not Responding",
    },
    {
        id: "U2005",
        value: "Audio Rear Integrated Control Panel Unit is Not Responding",
    },
    {
        id: "U2006",
        value: "Audio Remote Climate Control Unit is Not Responding",
    },
    {
        id: "U2007",
        value: "Audio Navigation Unit is Not Responding",
    },
    {
        id: "U2008",
        value: "Audio Phone is Not Responding",
    },
    {
        id: "U2009",
        value: "Audio Front Control Module (ACM) is Not Responding",
    },
    {
        id: "U2010",
        value: "Module is Not Responding (Non SCP)",
    },
    {
        id: "U2011",
        value: "Module Transmitted Invalid Data (Non SCP)",
    },
    {
        id: "U2012",
        value: "Communication Bus Error (Non SCP)",
    },
    {
        id: "U2013",
        value: "Compass Module is not Responding",
    },
    {
        id: "U2014",
        value: "Audio Subwoofer Unit is Not Responding",
    },
    {
        id: "U2015",
        value: "Signal Link Fault (Non SCP)",
    },
    {
        id: "U2016",
        value: "Signal Link Short to Ground (Non SCP) / From NGV Module",
    },
    {
        id: "U2017",
        value: "Driver Side Crash Sensor Communication Fault (Non SCP)",
    },
    {
        id: "U2018",
        value: "Passenger Side Crash Sensor Communication Fault (Non SCP)",
    },
    {
        id: "U2019",
        value: "Audio Voice Module Not Responding",
    },
    {
        id: "U2020",
        value: "Audio Center Amp is not responding",
    },
    {
        id: "U2021",
        value: "Invalid /fault data received (Non SCP)",
    },
    {
        id: "U2150",
        value: "SCP (J1850) Invalid Data from REM",
    },
    {
        id: "U2152",
        value: "SCP (J1850) Invalid Data from GEM",
    },
    {
        id: "U2160",
        value: "SCP (J1850) Invalid Data from IC",
    },
    {
        id: "U2195",
        value: "SCP (J1850) Invalid Data from SCLM",
    },
    {
        id: "U2500",
        value: "(CAN) Lack of Acknowledgement From Engine Management",
    },
];

for (const code of codes) {
    const out = {
        custom_id: `code_` + code.id,
        method: "POST",
        url: "/v1/chat/completions",
        body: {
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "developer",
                    content: `You are an expert automotive mechanic. You will receive a JSON object containing two fields:

- "id": a string representing a specific OBD2 error code (e.g., "P0300")
- "value": a string describing the error code (e.g., "Random/Multiple Cylinder Misfire Detected")

Your task is to return a detailed description in markdown format with an explanation of the OBD2 error code, written in a consistent and structured format.

Your markdown output must not repeat the code name or title at the beginning. Instead, follow this structure every time:
- Overview: What the code generally means and what system it relates to
- Symptoms: Common signs a vehicle may show when this code is present
- Diagnostic Steps: How a mechanic would confirm the issue
- Possible Causes: What might trigger this code
- Solutions: Step-by-step recommendations to fix or address the issue
- Conclusion: Summary or preventative advice if applicable

Formatting Requirements:
Use headings (###) for each section.
Avoid including the code name (e.g., "P0300") at the start of the description. This will be included in another part of the UI.

Incredibly important - this format is used in batch processing, so consistency and correct structure are essential.
                    `,
                },
                {
                    role: "user",
                    content: `{ "id": "${code.id}", "value": "${code.value}" }`,
                },
            ],
        },
    };
    fs.appendFileSync("obd2-fixes-v2.jsonl", JSON.stringify(out) + "\n", "utf-8");
}

console.log("✅ Done");
