import websockets
import asyncio
import pickle
import json
import time
import random
import base64
import os

from ..utility import isLoggedIn, isSpectator, isAdminOfProblem, compStatus
from .general import sendCompStatus
from .competition import sendUsersInComp

async def loadSpec(params, uobj):
    if not (await isLoggedIn(params["uid"], uobj)) or not (await isSpectator(params["cid"], uobj)):
        return
    
    sql = uobj.storage.sql
    tmp = await sql.execute("SELECT competitionname, specid FROM competitions WHERE id=%s", (params["cid"]))
    results = await tmp.fetchone()

    await uobj.ws.send(json.dumps({"func":"loadSpec", "name":results[0], "specid":results[1], "cid":params["cid"]}))
