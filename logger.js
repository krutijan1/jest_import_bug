require('le_node')
import assert from 'assert'
import winston from 'winston'

assert(winston.transports.Logentries)

export default winston
