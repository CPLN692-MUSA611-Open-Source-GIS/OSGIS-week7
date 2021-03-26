/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//Philadelphia Bike Network
var dataset = "https://opendata.arcgis.com/datasets/b5f660b9f0f44ced915995b6d49f6385_0.geojson"

//filter for bike routes (1) on spruce or pine st AND (2) paint buffered
var sprucePINE = ? ? ?
}

//filter for bike routes (1) on chestnut AND (2) one way protected bicycle lane
var chestnut = ? ? ?
}

//filter for bike routes (1) on N 10th St or N 13th St AND (2) paint buffered
var northPhilly = ? ? ?
}

//filter for bike routes of type conventional
var conventional = ? ? ?
}

//Bike network classification
//B - Buffered - A bike lane separated from motor vehicle traffic by a painted buffer.
//BB - Bus Bike Lane - A travel lane that is shared by bikes and buses.
//BC - Buffered w Conventional - A buffered bike lane in one direction and a conventional bike lane in the opposite direction.
//BF - Bicycle Friendly Street - A street with various treatments, including sharrows and bicycle signage at a minimum, to encourage bicycle use. May include traffic calming measures.
//BS - Buffered w Sharrows - A buffered bike lane in one direction and a lane with sharrows in the opposite direction.
//C - Conventional - Typically, a 5' to 6' bike lane marked with bike symbols
//CT - Cycle track - A physically separated one-way bike lane, typically operating in the same direction as motor vehicles. Bikes are separated from both motor vehicle traffic and the sidewalk by physical barriers such as curbs, bollards, parked cars, etc.
//CTC - Cycle track w Conventional - A cycle track in one direction and a conventional bike lane in the opposite direction.
//CTS - Cycle track w Sharrows - A cycle track in one direction and a lane with sharrows in the opposite direction.
//TCT - Two-way Cycle track - A two-way cycle track. Unless in the middle of the street, this will operate as contra-flow at intersections.
//CF - Contraflow - A typical 5' to 6' bike lane, but with bikes traveling in the opposite direction from motor vehicles.
//CFCO - Contraflow w Conventional, opposite - Two bike lanes in opposite directions on opposite sides of a one-way street.
//CFCS - Contraflow w Conventional, same - Two bike lanes in opposite directions on the same side of a one-way street. Typically, the bike lane closest to motor vehicle traffic will operate in the same direction with it.
//CFS - Contraflow w Sharrows - A contraflow on one side of a one-way street, with sharrows in a traffic lane.
//CS - Conventional w Sharrows - A conventional bike lane in one direction and a lane with sharrows in the opposite direction. Typically used on hills where there is no room for lanes in both direction, and called a Climbing Lane.
//OWPBL - One Way Protected Bicycle Lane - A one-way bike lane separated from motor vehicle traffic by a physical buffer
//PB - Paint Buffered - A bike lane separated from motor vehicle traffic by a painted buffer
//PBC - Paint Buffered w Conventional - A bike lane separated from motor vehicle by a painted buffer in one-direction and conventional bike lane in the opposite direction
//S - Sharrow - A general traffic lane with bike symbols and chevron arrows placed at intervals to indicate bicycle use and safe alignment.
//SGO - Signed Only - A street that is signed for bike use, but has no other bicycle accommodation. Used for easy biking streets that form important links in the bicycle network.
//SP - Sidepath - A sidewalk where bicycling is permitted in both directions
//SPOW - One-way sidepath - A sidewalk where bicycling is permitted in only one direction, the direction of adjacent motor vehicle traffic.
//TWPBL - Two Way Protected Bicycle Lane - A two-way bike lane separated from motor vehicle traffic by a physical buffer