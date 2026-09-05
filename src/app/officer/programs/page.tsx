'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookOpen } from 'lucide-react'

export default function ProgramsPage() {
  const programs = [
    { id: 'P001', name: 'Python Development', duration: '3 months', enrollments: 2450, status: 'Active' },
    { id: 'P002', name: 'Data Analytics', duration: '4 months', enrollments: 1820, status: 'Active' },
    { id: 'P003', name: 'Cloud Computing', duration: '3 months', enrollments: 980, status: 'Upcoming' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Training Programs</h1>
          <p className="mt-1 text-gray-600">Manage government-approved training programs</p>
        </div>
        <Button className="gap-2">
          <BookOpen className="h-4 w-4" />
          Add Program
        </Button>
      </div>

      <Card>
        <CardHeader>
          <Input placeholder="Search programs..." className="max-w-xs" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Program Name</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Enrollments</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {programs.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{p.id}</TableCell>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.duration}</TableCell>
                    <TableCell>{p.enrollments.toLocaleString()}</TableCell>
                    <TableCell>{p.status}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Manage
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
