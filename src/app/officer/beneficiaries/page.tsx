'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Users } from 'lucide-react'

export default function BeneficiariesPage() {
  const beneficiaries = [
    { id: '001', name: 'Raj Kumar Singh', program: 'Python Development', status: 'Trained', employment: 'Employed' },
    {
      id: '002',
      name: 'Priya Sharma',
      program: 'Data Analytics',
      status: 'Trained',
      employment: 'Employed',
    },
    {
      id: '003',
      name: 'Amit Patel',
      program: 'Cloud Computing',
      status: 'Training',
      employment: 'Pending',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Beneficiaries</h1>
          <p className="mt-1 text-gray-600">Manage and track all beneficiary records</p>
        </div>
        <Button className="gap-2">
          <Users className="h-4 w-4" />
          Add Beneficiary
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Input placeholder="Search beneficiaries..." className="max-w-xs" />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Status</option>
              <option>Training</option>
              <option>Trained</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Employment</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beneficiaries.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-medium">{b.id}</TableCell>
                    <TableCell>{b.name}</TableCell>
                    <TableCell>{b.program}</TableCell>
                    <TableCell>{b.status}</TableCell>
                    <TableCell>{b.employment}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
