
var files = [];
var obj ={};
// Parse command-line arguments
var args = process.argv.slice(2);
args.forEach(function(entry) {
    if (entry != "" ) {
        files.push(entry);
    };
});

var doc = ''
var fs = require('fs');

var mdtable = require('json-to-markdown-table');

var cols = ['ObjectID', 'Name', 'ObjectURN', 'MultipleInstances', 'Description'];
var resourcecols = ['ResourceID','Name', 'MultipleInstances', 'Mandatory', 'Type', 'RangeEnumeration', 'Units', 'Description' ];


files.forEach(function(filename) {
  obj = JSON.parse(fs.readFileSync(filename, 'utf8'));
  if ( 'Object' in obj.LWM2M ) {
    doc += '## Smart Object Definition \n' ;
    doc += '### ' ;
    doc += obj.LWM2M.Object.ObjectID ;
    doc += ' - ';
    doc += obj.LWM2M.Object.Name ;
    doc += '\n\n';
    doc += '### Description: \n' ;
    doc += obj.LWM2M.Object.Description ;
    doc += '\n\n';
    doc += '### Object Information: \n' ;
    doc += mdtable(obj.LWM2M.Object, cols );
    doc += '\n';
    doc += '### Resouces \n';
    doc += mdtable( obj.LWM2M.Object.Resources.Item, resourcecols );
    doc += '\n';
  }
  else if ( 'Resources' in obj.LWM2M ) {
    doc += '## Resouce Definitions \n';
    doc += mdtable( obj.LWM2M.Resources.Item, resourcecols );
    doc += '\n';

  };
});

console.log(doc);
