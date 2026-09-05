'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { trainingProviderData } from '@/lib/demo-data'

export function ProviderPerformanceTable() {
  const getStatusVariant = (status: string) => {
    if (status === 'Excellent') return 'default'
    if (status === 'Good') return 'secondary'
    return 'outline'
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Training Provider Performance</CardTitle>
            <p className="text-xs text-gray-500 mt-1">Enrollment, completion and employment metrics</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search provider..."
              className="text-xs border border-gray-300 rounded px-3 py-1.5 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <select className="text-xs border border-gray-200 rounded px-2 py-1.5">
              <option>All Districts</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provider</TableHead>
                <TableHead>District</TableHead>
                <TableHead className="text-right">Enrolled</TableHead>
                <TableHead className="text-right">Completion %</TableHead>
                <TableHead className="text-right">Employment Rate</TableHead>
                <TableHead className="text-right">Avg. Wage</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainingProviderData.map((provider) => (
                <TableRow key={provider.id}>
                  <TableCell className="font-medium text-gray-900">{provider.name}</TableCell>
                  <TableCell className="text-gray-600">{provider.district}</TableCell>
                  <TableCell className="text-right text-gray-700">
                    {provider.enrolled?.toLocaleString?.()}
                  </TableCell>
                  <TableCell className="text-right text-gray-700">{provider.completed}%</TableCell>
                  <TableCell className="text-right text-gray-700">{provider.employmentRate}%</TableCell>
                  <TableCell className="text-right text-gray-700">
                    ₹{provider.averageWage?.toLocaleString?.()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(provider.status)}>{provider.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4">
          <Button variant="outline" className="w-full text-sm">
            View All Providers
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
