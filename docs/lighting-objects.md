## Smart Object Definition 
### 3000 - OnOff

### Description: 
Sensor or Actuator for On/Off Control

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3000|OnOff|urn:oma:lwm2m:ext:3000|Multiple|Sensor or Actuator for On/Off Control|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5850|Current State|Multiple|Mandatory|Boolean|||The Curent State|
|5000|Toggle|Multiple|Optional|Opaque|||Current State := Current State XOR TRUE|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3001 - Level

### Description: 
Sensor or Actuator for Proportional Level Control

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3001|Level|urn:oma:lwm2m:ext:3001|Multiple|Sensor or Actuator for Proportional Level Control|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5001|Current Level|Single|Mandatory|Float||ucum:%|The Current Level Value in % or units specified by Units resource|
|5701|Units|Single|Optional|String|||Engineering Units|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5044|Change Level|Single|Optional|Float|||Change Level Setting|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5003|Remaining Time|Single|Optional|Float||ucum:%|Time left to execute teh current Action|
|5004|Stop|Single|Optional|Opaque|||Stop the currently executing Action|
|5005|Move|Single|Optional|Float||ucum:%/ucum:s|Start Move operatoin at a given rate, % per second|
|5006|Step|Single|Optional|Float||ucum:%|Start Step operation of a given size|
|5007|Step Time|Single|Optional|Float||ucum:s|Time to move Step amount|
|5008|OnOff Link|Multiple|Optional|Objlink|||Associated OnOff Actuator|
|5009|On Level|Single|Optional|Float||ucum:%|Go to this level when OnOff is set to On|
|5010|OnOff Transition Time|Single|Optional|Float||ucum:s|Time to move OnOff state from off to on, or from on to off|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3002 - Color HS

### Description: 
Color COntrol using the HS Color Space, to be used with Level control

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3002|Color HS|urn:oma:lwm2m:ext:3002|Multiple|Color COntrol using the HS Color Space, to be used with Level control|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5027|Current Hue|Single|Mandatory|Float|0-360||Current value of hue setting for HS light control mode|
|5028|Current Saturation|Single|Mandatory|Float||ucum:%|Current value of saturation setting for HS light control mode|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5003|Remaining Time|Single|Optional|Float||ucum:%|Time left to execute teh current Action|
|5004|Stop|Single|Optional|Opaque|||Stop the currently executing Action|
|5055|Change Hue|Single|Optional|Float|||Change Hue Setting|
|5056|Change Saturation|Single|Optional|Float|||Change Saturation Setting|
|5032|Move Hue|Single|Optional|Float|||Start Move Hue Operation at the given rate|
|5033|Move Saturation|Single|Optional|Float|||Start Move Saturation Operation at the given rate|
|5037|Step Hue|Single|Optional|Float|||Start Step Hue Operation at the given rate|
|5038|Step Saturation|Single|Optional|Float|||Start Step Saturation Operation at the given rate|
|5007|Step Time|Single|Optional|Float||ucum:s|Time to move Step amount|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3003 - Color XY

### Description: 
Color control using the CIE XY Color Space

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3003|Color XY|urn:oma:lwm2m:ext:3003|Multiple|Color control using the CIE XY Color Space|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5029|Current X|Single|Mandatory|Float|||Current value of X setting for XY light control mode|
|5030|Current Y|Single|Mandatory|Float|||Current value of Y setting for XY light control mode|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5003|Remaining Time|Single|Optional|Float||ucum:%|Time left to execute teh current Action|
|5004|Stop|Single|Optional|Opaque|||Stop the currently executing Action|
|5057|Change X|Single|Optional|Float|||Change X Setting|
|5058|Change Y|Single|Optional|Float|||Change Y Setting|
|5034|Move X|Single|Optional|Float|||Start Move X Operation at the given rate|
|5035|Move Y|Single|Optional|Float|||Start Move Y Operation at the given rate|
|5039|Step X|Single|Optional|Float|||Start Step X Operation at the given rate|
|5040|Step Y|Single|Optional|Float|||Start Step Y Operation at the given rate|
|5007|Step Time|Single|Optional|Float||ucum:s|Time to move Step amount|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3004 - Color Temperature

### Description: 
Color control using Color Temperature

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3004|Color Temperature|urn:oma:lwm2m:ext:3004|Multiple|Color control using Color Temperature|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5031|Current Color Temp|Single|Mandatory|Float||ucum:k|Current value of Color Temperature in degrees K for CT light control mode|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5003|Remaining Time|Single|Optional|Float||ucum:%|Time left to execute teh current Action|
|5004|Stop|Single|Optional|Opaque|||Stop the currently executing Action|
|5059|Change Color Temperature|Single|Optional|Float||ucum:degK|Change Color Temperature Setting|
|5036|Move Color Temp|Single|Optional|Float|||Start Move Color Temp Operation at the given rate|
|5041|Step Color Temp|Single|Optional|Float|||Start Step Color Temp Operation at the given rate|
|5007|Step Time|Single|Optional|Float||ucum:s|Time to move Step amount|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3005 - Color RGB

### Description: 
Color control using the RGB Color Space

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3005|Color RGB|urn:oma:lwm2m:ext:3005|Multiple|Color control using the RGB Color Space|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5060|Current Red|Single|Mandatory|Float|||Current Red Setting|
|5061|Current Green|Single|Mandatory|Float|||Current Green Setting|
|5062|Current Blue|Single|Mandatory|Float|||Current Blue Setting|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5003|Remaining Time|Single|Optional|Float||ucum:%|Time left to execute teh current Action|
|5004|Stop|Single|Optional|Opaque|||Stop the currently executing Action|
|5063|Change Red|Single|Optional|Float|||Change Red Setting|
|5064|Change Green|Single|Optional|Float|||Change Green Setting|
|5065|Change Blue|Single|Optional|Float|||Change Blue Setting|
|5066|Move Red|Single|Optional|Float||ucum:%/ucum:sec|Move Red settig per second Setting|
|5067|Move Green|Single|Optional|Float||ucum:%/ucum:sec|Move Green settig per second Setting|
|5068|Move Blue|Single|Optional|Float||ucum:%/ucum:sec|Move Blue settig per second Setting|
|5069|Step Red|Single|Optional|Float||ucum:%|Step Red setting relative to current value|
|5070|Step Green|Single|Optional|Float||ucum:%|Step Green setting relative to current value|
|5071|Step Blue|Single|Optional|Float||ucum:%|Step Blue setting relative to current value|
|5007|Step Time|Single|Optional|Float||ucum:s|Time to move Step amount|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3006 - Controller

### Description: 
Controller device such as a wall mounted switch

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3006|Controller|urn:oma:lwm2m:ext:3006|Multiple|Controller device such as a wall mounted switch|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5011|OnOff Control|Multiple|Optional|Boolean|||The state of an OnOff control element, e.g. a user control|
|5012|Level Control|Multiple|Optional|Float||ucum:%|The setting of a level control element, e.g. a user control|
|5013|Momentary Switch|Multiple|Optional|Boolean|||The state of a momentary switch like a user push button|
|5014|Up or Increment|Multiple|Optional|Boolean|||The state of a momentary switch that indicates an expected increase in value|
|5015|Down or Decrement|Multiple|Optional|Boolean|||The state of a momentary switch that indicates an expected decrease in value|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3007 - Binding

### Description: 
Binding client action to resource state change

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3007|Binding|urn:oma:lwm2m:ext:3007|Multiple|Binding client action to resource state change|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5016|Object Instance|Single|Mandatory|Objlink|||An Object Link to the Containing Object Instance|
|5017|Resource ID|Multiple|Mandatory|Integer|||Indicates which Resource ID to use with a link or binding|
|5045|Target Object|Single|Mandatory|Objlink|||Local Object Target of a binding|
|5046|Target Resource|Single|Optional|Integer|||Local resource in object target of a binding|
|5018|Target IRI|Single|Optional|Boolean|||IRI to use as the external target of a binding, URI format|
|5019|Binding type|Single|Mandatory|Integer|0-5||enum of 0=Write, WriteSync, Exec, ExecSync, ReadPoll, 5=Observe|
|5020|Poll Interval|Single|Optional|Float||ucum:s|ReadPoll Interval|
|5021|Payload Template|Single|Optional|String|JSON||Template for a payload expected for e.g. an Action|
|5022|Pmin|Single|Optional|Float||ucum:s|Minumum notification period on variable state change|
|5023|Pmax|Single|Optional|Float||ucum:s|Maximum notification period on variable state change|
|5024|LT|Single|Optional|Number||ucum:%|Minimum (lower) value threshold|
|5025|GT|Single|Optional|Number||ucum:%|Maximum (upper) value threshold|
|5026|Step|Single|Optional|Number||ucum:%|Step value threshold|
|5042|Notification Options|Multiple|Optional|String|Band||Use Band Notification for LT and GT reporting|
|5043|SV|Single|Optional|Float|regex||String report filter|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3008 - Peer

### Description: 
Network Peer Object

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3008|Peer|urn:oma:lwm2m:ext:3008|Multiple|Network Peer Object|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5047|Network Address|Single|Mandatory|String|||RFC3986 URI with shceme and authority|
|5048|Short ID|Single|Mandatory|Integer|||Short ID for ACL reference|
|5049|Public Key|Single|Optional|String|||Local Public Key used in Handshake|
|5050|Private Key|Single|Optional|Opaque|||Local Private Key used in verification and signing|
|5051|External Public Key|Single|Optional|String|||Remote Public Key used in Handshake|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3009 - Network Group

### Description: 
Network Group Object e.g. to map a multicast address

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3009|Network Group|urn:oma:lwm2m:ext:3009|Multiple|Network Group Object e.g. to map a multicast address|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5047|Network Address|Single|Mandatory|String|||RFC3986 URI with shceme and authority|
|5078|Application Group|Single|Optional|Integer|||Identifier of a protocol-specific applicaiton group|
|5048|Short ID|Single|Mandatory|Integer|||Short ID for ACL reference|
|5049|Public Key|Single|Optional|String|||Local Public Key used in Handshake|
|5050|Private Key|Single|Optional|Opaque|||Local Private Key used in verification and signing|
|5051|External Public Key|Single|Optional|String|||Remote Public Key used in Handshake|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3010 - Link Group

### Description: 
Link Group for collective interaction with local objects

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3010|Link Group|urn:oma:lwm2m:ext:3010|Multiple|Link Group for collective interaction with local objects|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5054|Instance List|Multiple|Mandatory|Objlink|||Array of links to local object instances|
|5079|Instance group|Multiple|Mandatory|Objlink|||Used to interact with all instances collectively|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3011 - Scene

### Description: 
Scene Definition Object

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3011|Scene|urn:oma:lwm2m:ext:3011|Multiple|Scene Definition Object|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5072|Name|Single|Optional|String||ucum:%|Name of a scene or other item in a collection|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5054|Instance List|Multiple|Mandatory|Objlink|||Array of links to local object instances|
|5074|Scene Configurtion|Single|Mandatory|String|SenML||A SenML template for updating object instances as scene members|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Smart Object Definition 
### 3012 - Scene Control

### Description: 
Scene Control Object

### Object Information: 
|ObjectID|Name|ObjectURN|MultipleInstances|Description|
|----|----|----|----|----|
|3012|Scene Control|urn:oma:lwm2m:ext:3012|Multiple|Scene Control Object|

### Resouces 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5075|Current Scene|Single|Mandatory|Objlink|||The most recently recalled Scene|
|5076|Recall Scene|Single|Mandatory|Objlink|||Recall the indicated Scene|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5073|Valid|Single|Optional|Boolean||ucum:%|Indicates that the value obtained is the most current value, e.g. a scene state matches the state of all resources in the scene|
|5077|Update Scene|Single|Optional|Objlink|||Update the current scene or the linked scene|
|5750|Application Type|Single|Optional|String|||The application type or use context|

## Resouce Definitions 
|ResourceID|Name|MultipleInstances|Mandatory|Type|RangeEnumeration|Units|Description|
|----|----|----|----|----|----|----|----|
|5000|Toggle|Single|Optional|Opaque|||Current State := Current State XOR TRUE|
|5001|Current Level|Single|Optional|Float||ucum:%|The Current Level Value in % or units specified by Units resource|
|5002|Transition Time|Single|Optional|Float||ucum:%|Time to reach the new state or value|
|5003|Remaining Time|Single|Optional|Float||ucum:%|Time left to execute teh current Action|
|5004|Stop|Single|Optional|Opaque|||Stop the currently executing Action|
|5005|Move|Single|Optional|Float||ucum:%/ucum:s|Start Move operatoin at a given rate, % per second|
|5006|Step|Single|Optional|Float||ucum:%|Start Step operation of a given size|
|5007|Step Time|Single|Optional|Float||ucum:s|Time to move Step amount|
|5008|OnOff Link|Multiple|Optional|Objlink|||Associated OnOff Actuator|
|5009|On Level|Single|Optional|Float||ucum:%|Go to this level when OnOff is set to On|
|5010|OnOff Transition Time|Single|Optional|Float||ucum:s|Time to move OnOff state from off to on, or from on to off|
|5011|OnOff Control|Multiple|Optional|Boolean|||The state of an OnOff control element, e.g. a user control|
|5012|Level Control|Multiple|Optional|Float||ucum:%|The setting of a level control element, e.g. a user control|
|5013|Momentary Switch|Multiple|Optional|Boolean|||The state of a momentary switch like a user push button|
|5014|Up or Increment|Multiple|Optional|Boolean|||The state of a momentary switch that indicates an expected increase in value|
|5015|Down or Decrement|Multiple|Optional|Boolean|||The state of a momentary switch that indicates an expected decrease in value|
|5016|Object Instance|Single|Optional|Objlink|||An Object Link to the Containing Object Instance|
|5017|Resource ID|Multiple|Optional|Integer|||Indicates which Resource ID to use with a link or binding|
|5018|Target IRI|Single|Optional|Boolean|||IRI to use as the external target of a binding, URI format|
|5019|Binding type|Single|Optional|Integer|0-5||enum of 0=Write, WriteSync, Exec, ExecSync, ReadPoll, 5=Observe|
|5020|Poll Interval|Single|Optional|Float||ucum:s|ReadPoll Interval|
|5021|Payload Template|Single|Optional|String|JSON||Template for a payload expected for e.g. an Action|
|5022|Pmin|Single|Optional|Float||ucum:s|Minumum notification period on variable state change|
|5023|Pmax|Single|Optional|Float||ucum:s|Maximum notification period on variable state change|
|5024|LT|Single|Optional|Number||ucum:%|Minimum (lower) value threshold|
|5025|GT|Single|Optional|Number||ucum:%|Maximum (upper) value threshold|
|5026|Step|Single|Optional|Number||ucum:%|Step value threshold|
|5027|Current Hue|Single|Optional|Float|0-360||Current value of hue setting for HS light control mode|
|5028|Current Saturation|Single|Optional|Float||ucum:%|Current value of saturation setting for HS light control mode|
|5029|Current X|Single|Optional|Float|||Current value of X setting for XY light control mode|
|5030|Current Y|Single|Optional|Float|||Current value of Y setting for XY light control mode|
|5031|Current Color Temp|Single|Optional|Float||ucum:k|Current value of Color Temperature in degrees K for CT light control mode|
|5032|Move Hue|Single|Optional|Float|||Start Move Hue Operation at the given rate|
|5033|Move Saturation|Single|Optional|Float|||Start Move Saturation Operation at the given rate|
|5034|Move X|Single|Optional|Float|||Start Move X Operation at the given rate|
|5035|Move Y|Single|Optional|Float|||Start Move Y Operation at the given rate|
|5036|Move Color Temp|Single|Optional|Float|||Start Move Color Temp Operation at the given rate|
|5037|Step Hue|Single|Optional|Float|||Start Step Hue Operation at the given rate|
|5038|Step Saturation|Single|Optional|Float|||Start Step Saturation Operation at the given rate|
|5039|Step X|Single|Optional|Float|||Start Step X Operation at the given rate|
|5040|Step Y|Single|Optional|Float|||Start Step Y Operation at the given rate|
|5041|Step Color Temp|Single|Optional|Float|||Start Step Color Temp Operation at the given rate|
|5042|Notification Options|Multiple|Optional|String|Band||Use Band Notification for LT and GT reporting|
|5043|SV|Single|Optional|Float|regex||String report filter|
|5044|Change Level|Single|Optional|Float|||Change Level Setting|
|5045|Target Object|Single|Optional|Objlink|||Local Object Target of a binding|
|5046|Target Resource|Single|Optional|Integer|||Local resource in object target of a binding|
|5047|Network Address|Single|Optional|String|||RFC3986 URI with shceme and authority|
|5048|Short ID|Single|Optional|Integer|||Short ID for ACL reference|
|5049|Public Key|Single|Optional|String|||Local Public Key used in Handshake|
|5050|Private Key|Single|Optional|Opaque|||Local Private Key used in verification and signing|
|5051|External Public Key|Single|Optional|String|||Remote Public Key used in Handshake|
|5052|Actions|Multiple|Optional|String|JSON||Reusable resource for current collection of actions|
|5053|Current Action|Multiple|Optional|Integer|||Index in Actions array of the current action|
|5054|Instance List|Multiple|Optional|Objlink|||Array of links to local object instances|
|5055|Change Hue|Single|Optional|Float|||Change Hue Setting|
|5056|Change Saturation|Single|Optional|Float|||Change Saturation Setting|
|5057|Change X|Single|Optional|Float|||Change X Setting|
|5058|Change Y|Single|Optional|Float|||Change Y Setting|
|5059|Change Color Temperature|Single|Optional|Float||ucum:degK|Change Color Temperature Setting|
|5060|Current Red|Single|Optional|Float|||Current Red Setting|
|5061|Current Green|Single|Optional|Float|||Current Green Setting|
|5062|Current Blue|Single|Optional|Float|||Current Blue Setting|
|5063|Change Red|Single|Optional|Float|||Change Red Setting|
|5064|Change Green|Single|Optional|Float|||Change Green Setting|
|5065|Change Blue|Single|Optional|Float|||Change Blue Setting|
|5066|Move Red|Single|Optional|Float||ucum:%/ucum:sec|Move Red settig per second Setting|
|5067|Move Green|Single|Optional|Float||ucum:%/ucum:sec|Move Green settig per second Setting|
|5068|Move Blue|Single|Optional|Float||ucum:%/ucum:sec|Move Blue settig per second Setting|
|5069|Step Red|Single|Optional|Float||ucum:%|Step Red setting relative to current value|
|5070|Step Green|Single|Optional|Float||ucum:%|Step Green setting relative to current value|
|5071|Step Blue|Single|Optional|Float||ucum:%|Step Blue setting relative to current value|
|5072|Name|Single|Optional|String||ucum:%|Name of a scene or other item in a collection|
|5073|Valid|Single|Optional|Boolean||ucum:%|Indicates that the value obtained is the most current value, e.g. a scene state matches the state of all resources in the scene|
|5074|Scene Configurtion|Single|Optional|String|SenML||A SenML template for updating object instances as scene members|
|5075|Current Scene|Single|Optional|Objlink|||The most recently recalled Scene|
|5076|Recall Scene|Single|Optional|Objlink|||Recall the indicated Scene|
|5077|Update Scene|Single|Optional|Objlink|||Update the current scene or the linked scene|
|5078|Application Group|Single|Optional|Integer|||Identifier of a protocol-specific applicaiton group|
|5079|Instance group|Multiple|Optional|Objlink|||Used to interact with all instances collectively|


