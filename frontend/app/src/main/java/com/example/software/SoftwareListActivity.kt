package com.example.software

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.android.volley.toolbox.JsonArrayRequest
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.toolbox.Volley
import com.example.software.models.Software
import org.json.JSONException

class SoftwareListActivity : AppCompatActivity() {
    private lateinit var software: ArrayList<Software>
    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: SoftwareAdapter
    private lateinit var viewManager: RecyclerView.LayoutManager
    private lateinit var requestQueue: RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_software_list)

        requestQueue = Volley.newRequestQueue(this)

        software = ArrayList<Software>()

        viewManager = LinearLayoutManager(this)
        viewAdapter = SoftwareAdapter(software, this)

        recyclerView = findViewById<RecyclerView>(R.id.recyclerViewSoftware)

        recyclerView.layoutManager = viewManager

        recyclerView.adapter = viewAdapter

        getAllSoftware()

        (recyclerView.adapter as SoftwareAdapter).notifyDataSetChanged()
    }


    private fun getAllSoftware() {
        val url = "http://192.168.0.164:8080/api/bicycles"
        val request =
                JsonArrayRequest(Request.Method.GET, url, null, { response ->
                    try {
                        for (i in 0 until response.length()) {
                            val bicycle = response.getJSONObject(i)
                            val id = bicycle.getInt("id")
                            val name = bicycle.getString("name")
                            val version = bicycle.getString("version")
                            val release = bicycle.getString("release")
                            software.add(Software(id, name, version, release))
                        }
                        viewAdapter.softwareList = software
                        viewAdapter.notifyDataSetChanged()
                    } catch (e: JSONException) {
                        e.printStackTrace()
                    }
                }, { error -> error.printStackTrace() })
        requestQueue?.add(request)
    }
    
}