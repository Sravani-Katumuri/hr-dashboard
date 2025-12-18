import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  stats = [
    { label: 'Total Employees', value: 120 },
    { label: 'New Joinees', value: 8 },
    { label: 'Attendance %', value: '92%' },
    { label: 'Open Positions', value: 5 }
  ];

  activities = [
    'John joined Engineering',
    'Payroll processed',
    'Leave approved for Ananya',
    'New job posted for HR'
  ];

  employees = [
    { name: 'John Doe', role: 'Developer', department: 'Engineering', status: 'Active' },
    { name: 'Ananya Rao', role: 'HR Manager', department: 'HR', status: 'Active' },
    { name: 'Rahul Singh', role: 'QA Engineer', department: 'Quality', status: 'Inactive' }
  ];
  ngAfterViewInit(): void {
    new Chart('performanceChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Employee Performance',
            data: [65, 72, 80, 75, 90],
            backgroundColor: '#0d6efd'
          }
        ]
      },
      options: {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }

      }
    });
  }



}
