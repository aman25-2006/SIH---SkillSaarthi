'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Building2 } from 'lucide-react'

export default function ProvidersPage() {
  const providers = [
    { id: 'TR001', name: 'ABC Skill Institute', district: 'Muzaffarpur', status: 'Active' },
    { id: 'TR002', name: 'XYZ Training Academy', district: 'Patna', status: 'Active' },
    { id: 'TR003', name: 'SkillTech Centre', district: 'Gaya', status: 'Active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Training Providers</h1>
          <p className="mt-1 text-gray-600">Manage and monitor training provider performance</p>
        </div>
        <Button className="gap-2">
          <Building2 className="h-4 w-4" />
          Register Provider
        </Button>
      </div>

      <Card>
        <CardHeader>
          <Input placeholder="Search providers..." className="max-w-xs" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Provider Name</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {providers.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{p.id}</TableCell>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.district}</TableCell>
                    <TableCell>
                      <Badge>{p.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
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
