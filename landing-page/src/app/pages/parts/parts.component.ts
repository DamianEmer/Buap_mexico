import { Component, OnInit } from '@angular/core';

interface Part {
  number: string;
  name: string;
  length: string;
  organism: string;
}

interface Composite {
  code: string;
  function: string;
}

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  dataParts: Part[] = [
    {
      number: 'BBa_K2617001',
      name: 'Xylosidase and arabinofuranosidase',
      length: '2586pb',
      organism: 'Prevotella ruminicOolla'
    },
    {
      number: 'BBa_k118022',
      name: 'Exoglucanase',
      length: '1461bp',
      organism: 'Cellulomonas fimi'
    },
    {
      number: 'BBa_k118023',
      name: 'Endoglucanase',
      length: '1353bp',
      organism: 'Cellulomonas fimi'
    },
    {
      number: 'BBa_k261700',
      name: 'Ferulic esterase and xylanase',
      length: '2181bp',
      organism: ''
    },
    {
      number: 'BBa_k1465201',
      name: 'Phosforibulokinase',
      length: '1020bp',
      organism: 'Synechococcus elongatus'
    },
    {
      number: 'BBa_k1465202',
      name: 'Rubisco',
      length: '1791bp',
      organism: 'Hallothiobacillus neopolitanus'
    },
    {
      number: 'BBa_k1465205',
      name: 'Carbonic anhydrase',
      length: '1565bp',
      organism: 'Hallothiobacillus neopolitanus'
    },
    {
      number: 'BBa_k934001',
      name: '3-ketothiolase, acetoacetyl-CoA reductase and PHA synthase',
      length: '4208bp',
      organism: 'Escherichia coli'
    },
    {
      number: 'BBa_k523014',
      name: 'B-glucosidase',
      length: '2946bp',
      organism: 'Escherichia coli'
    },
    {
      number: 'BBa_k523002',
      name: 'B-glucosidase',
      length: '2338bp',
      organism: 'Escherichia coli'
    },
    {
      number: 'BBa_k2449004',
      name: 'Cellobiose phosforilase',
      length: '2779bp',
      organism: 'Sacharophagus degradans'
    },
    {
      number: 'B0012',
      name: 'Terminator',
      length: '41bp',
      organism: 'Escherichia coli'
    },
    {
      number: 'B0010',
      name: 'Terminator',
      length: '80bp',
      organism: 'Escherichia coli'
    },
    {
      number: 'BBa_J100301',
      name: 'OmpW  promoter',
      length: '56bp',
      organism: 'Salmonella enterica'
    },
    {
      number: 'BBa_R0010',
      name: 'Promoter Lac I (regulared)',
      length: '200bp',
      organism: 'Escherichia coli'
    },
    {
      number: 'BBa_k592025',
      name: 'Chromoprotein',
      length: '687bp',
      organism: '687bp'
    }
  ];

  dataComposite: Composite[] = [
    {
      code: 'BBa_K3238003',
      function: 'Part of toggle switch to test the functionality of the new part BBa_K3238000'
    },
    {
      code: 'BBa_K3238004',
      function: 'Part of toggle switch to test the functionality of the new part BBa_K3238001 and BBa_K3238001'
    },
    {
      code: 'BBa_K3238005',
      function: 'Test the functionality of Purple- blue chromoprotein amilCP combined with pel - 5b to report the protein production of modules 1 and 2 of our project.'
    }
  ]

constructor() { }

displayedColumns: string[] = ['number', 'name', 'length', 'organism'];

displayedColumnsComposite: string[] = ['code', 'function'];


ngOnInit() {
}

}
